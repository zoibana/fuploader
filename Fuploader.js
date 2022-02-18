import Button from "./source/js/Button";
import Progressbar from "./source/js/Progressbar";
import Status from "./source/js/Status";
import Icon from "./source/js/Icon";

export default class Fuploader {

    static lang = {
        'en': {
            'upload': 'Upload',
            'uploadMore': 'Upload more',
            'cancel': 'Cancel',
            'uploaded': 'Uploaded',
            'error': 'Error',
            'allFilesUploaded': 'Files are uploaded',
            'dragFilesHere': 'Drag files here',
            'orChooseFileFromComputer': 'Or choose file from computer',
            'dropFilesHere': 'Drop files here',
            'totalSize': 'Total size',
            'selectedFiles': 'Selected',
        },
        'ru': {
            'upload': 'Загрузить',
            'uploadMore': 'Загрузить еще',
            'cancel': 'Отмена',
            'uploaded': 'Загружен',
            'error': 'Ошибка',
            'allFilesUploaded': 'Файлы загружены',
            'dragFilesHere': 'Перетащите файл сюда',
            'orChooseFileFromComputer': 'Или выберите на компьютере',
            'dropFilesHere': 'Бросьте файл в эту область',
            'totalSize': 'Общий вес',
            'selectedFiles': 'Выбрано файлов',
        },
    }

    constructor(element, params = {}) {

        this.el = element;

        let defaults = {
            locale: null,
            lang: 'en',
            upload_url: '/upload.php',
            name: 'file',
            width: '100%',
            height: '400px',
            classes: {
                container: 'fuploader',
                dropzone: 'fuploader-dropzone',
                dropzoneLabel: 'fuploader-dropzone-label',
                dropzoneArea: 'fuploader-dropzone-area',
                dragOver: 'dragover',
                filelist: 'fuploader-filelist',
                filelistItems: 'fuploader-filelist-files',
                filelistData: 'fuploader-filelist-file-data',
                filelistDataTitle: 'fuploader-filelist-file-data-title',
                filelistDataSize: 'fuploader-filelist-file-data-size',
                filelistActions: 'fuploader-filelist-file-actions',
                footer: 'fuploader-footer',
                footerData: 'fuploader-footer-data',
                footerButtons: 'fuploader-footer-buttons',
                file: 'fuploader-filelist-file',
                fileIcon: 'fuploader-filelist-file-icon',
                fileIconImage: 'fuploader-file-image',
                fileRemove: 'fuploader-filelist-file-remove',
                fileProgress: 'fuploader-filelist-file-progress',
                fileStatus: 'fuploader-filelist-file-status',
            }
        };
        this.options = Object.assign(defaults, params);
        this.locale = Fuploader.lang[this.options.lang] || Fuploader.lang.en;

        this.el.classList.add(this.options.classes.container);
        this.el.style.width = Number.isInteger(this.options.width) ? this.options.width + 'px' : this.options.width;
        this.el.style.height = Number.isInteger(this.options.height) ? this.options.height + 'px' : this.options.height;

        this.renderDefaultLayout();

        this.dropzone = this.el.querySelector('.' + this.options.classes.dropzone);
        this.filelist = this.el.querySelector('.' + this.options.classes.filelist);
        this.filelistItems = this.filelist.querySelector('.' + this.options.classes.filelistItems);
        this.footer = this.el.querySelector('.' + this.options.classes.footer);
        this.footerStat = this.footer.querySelector('.' + this.options.classes.footerData);
        this.footerButtons = this.footer.querySelector('.' + this.options.classes.footerButtons);
        this.input = this.el.querySelector('input[type="file"]');

        this.addButton = Button.primary('+');
        this.cancelButton = Button.secondary(this.locale.cancel);
        this.uploadButton = Button.primary(this.locale.upload);
        this.reloadButton = Button.primary(this.locale.uploadMore);
        this.reloadButton.classList.add('hidden');

        this.footerButtons.append(this.addButton);
        this.footerButtons.append(this.cancelButton);
        this.footerButtons.append(this.uploadButton);
        this.footerButtons.append(this.reloadButton);

        this.files = [];
        this.uploadIndex = 0;
        this.isUploading = false;
        this.isDone = false;

        this.xhr = null;

        this.initEvents();
    }

    initEvents() {
        this.el.addEventListener("dragenter", this.dragOver.bind(this), false);
        this.el.addEventListener("dragover", this.dragOver.bind(this), false);
        this.el.addEventListener("dragexit", this.dragLeave.bind(this), false);
        this.el.addEventListener("dragleave", this.dragLeave.bind(this), false);
        this.el.addEventListener("drop", this.dropped.bind(this), false);
        this.input.addEventListener('change', this.processInputFiles.bind(this));

        this.addButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.input.click();
            return false;
        });

        this.cancelButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.cancel();
            return false;
        });

        this.uploadButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.uploadFiles();
            return false;
        });

        this.reloadButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.cancel();
            return false;
        });

        this.filelistItems.addEventListener('click', (event) => {
            let className = this.options.classes.fileRemove;
            let target = event.target;
            if (target.classList.contains(className) || target.closest('.' + className)) {
                event.preventDefault();
                let index = parseInt(target.closest('.' + this.options.classes.file).dataset.index);
                this.files.splice(index, 1);
                this.renderFiles();
                return false;
            }
        });

    }

    renderDefaultLayout() {
        let layout = [];
        layout.push(this.tplFilelist());
        layout.push(this.dropzoneTpl());
        this.el.innerHTML = layout.join('');
    }

    dragOver(event) {
        event.stopPropagation();
        event.preventDefault();

        if (this.isUploading) {
            event.dataTransfer.dropEffect = 'none';
        } else {
            this.el.classList.add(this.options.classes.dragOver);
            event.dataTransfer.dropEffect = 'copy';
        }
    }

    dragLeave() {
        this.el.classList.remove(this.options.classes.dragOver);
    }

    dropped(event) {
        event.stopPropagation();
        event.preventDefault();

        this.dragLeave();

        if (!this.isUploading) {
            this.handleFiles(event.dataTransfer.files);
        }
    }

    processInputFiles() {
        this.handleFiles(this.input.files);
    }

    handleFiles(files) {

        if (this.isDone) {
            this.cancel();
        }

        ([...files]).forEach((file) => {
            this.files.push(file);
        });

        this.renderFiles();
    }

    showFilelist() {
        this.dropzone.classList.add('hidden');
        this.filelist.classList.remove('hidden');
    }

    hideFileList() {
        this.dropzone.classList.remove('hidden');
        this.filelist.classList.add('hidden');
    }

    renderFiles() {
        let tpl = [];

        this.files.forEach((file, index) => {
            tpl.push(this.fileTpl(file, index));

            if (file.type.match('image/*')) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = (event) => {
                    let imageElement = this.filelistItems.querySelectorAll('.' + this.options.classes.file)[index];
                    imageElement.querySelector('.' + this.options.classes.fileIconImage).style.backgroundImage = 'url(' + event.target.result + ')';
                }
            }
        });

        if (this.files.length) {
            this.showFilelist();

            this.filelistItems.innerHTML = tpl.join('');
            this.footerStat.innerHTML = this.tplStat();
        } else {
            this.hideFileList();
        }
    }

    uploadFiles() {
        this.addButton.classList.add('hidden');
        this.reloadButton.classList.add('hidden');
        this.uploadButton.classList.add('hidden');

        if (this.files.length) {
            let file = this.files[this.uploadIndex];
            this.uploadFile(file, this.uploadIndex);
        }
    }

    uploadFile(file, index) {

        let fileElement = this.filelistItems.querySelectorAll('.' + this.options.classes.file)[index];
        let progressBar = fileElement.querySelector('.' + this.options.classes.fileProgress);
        let removeButton = fileElement.querySelector('.' + this.options.classes.fileRemove);
        let statusContainer = fileElement.querySelector('.' + this.options.classes.fileStatus);

        removeButton.classList.add('hidden');
        progressBar.classList.remove('hidden');

        let formData = new FormData()
        formData.append(this.options.name, file);

        let totalProgress = (this.uploadIndex / this.files.length) * 100;
        this.footerStat.innerHTML = Progressbar.render(totalProgress);

        this.xhr = new XMLHttpRequest();
        this.xhr.onprogress = event => {
            let percent_completed = (event.loaded / event.total) * 100;
            progressBar.innerHTML = Progressbar.render(percent_completed);
        };
        this.xhr.addEventListener('load', () => {
            let status = parseInt(this.xhr.status);
            progressBar.classList.add('hidden');
            if (status === 200) {
                statusContainer.innerHTML = Status.success(this.locale.uploaded);
            } else {
                statusContainer.innerHTML = Status.error(this.locale.error);
            }

            this.uploadIndex++;
            if (this.uploadIndex + 1 > this.files.length) {
                this.uploaded();
                return;
            }

            let file = this.files[this.uploadIndex];
            this.uploadFile(file, this.uploadIndex);
        });
        this.xhr.open("POST", this.options.upload_url, true);
        this.xhr.send(formData);
    }

    uploaded() {
        this.isUploading = false;
        this.isDone = true;
        this.footerStat.innerHTML = Status.success(this.locale.allFilesUploaded);
        this.cancelButton.classList.add('hidden');
        this.reloadButton.classList.remove('hidden');
    }

    cancel() {
        this.files = [];
        this.isUploading = false;
        this.isDone = false;
        this.uploadIndex = 0;

        if (this.xhr) {
            this.xhr.abort();
        }

        this.reloadButton.classList.add('hidden');
        this.addButton.classList.remove('hidden');
        this.cancelButton.classList.remove('hidden');
        this.uploadButton.classList.remove('hidden');

        this.renderFiles();
    }

    dropzoneTpl() {
        return `
            <label class="${this.options.classes.dropzone}">
                <div>
                    <input type="file" multiple>
                    <div class="${this.options.classes.dropzoneLabel}">${this.locale.dragFilesHere}</div>
                    ${Button.primary(this.locale.orChooseFileFromComputer, 'span').outerHTML}
                </div>
            </label>
            <div class="${this.options.classes.dropzoneArea} hidden">
                <div>${this.locale.dropFilesHere}</div>
            </div>
        `;
    }

    fileTpl(file) {
        return `
            <div class="${this.options.classes.file}">
                <div class="${this.options.classes.fileIcon} ${file.type.match('image.*') ? this.options.classes.fileIconImage : ''}">
                    ${Icon.file()}
                </div>
                <div class="${this.options.classes.filelistData}">
                    <div class="${this.options.classes.filelistDataTitle}">${file.name}</div>
                    <div class="${this.options.classes.filelistDataSize}">${this.fileSize(file.size)}</div>
                </div>
                <div class="${this.options.classes.filelistActions}">
                    <div class="${this.options.classes.fileProgress}"></div>
                    <div class="${this.options.classes.fileStatus}"></div>
                    <div class="${this.options.classes.fileRemove}">
                        ${Icon.trash()}
                    </div>
                </div>
            </div>
        `;
    }

    tplFilelist() {
        return `
            <div class="${this.options.classes.filelist} hidden">
                <div class="${this.options.classes.filelistItems}"></div>
                <div class="${this.options.classes.footer}">
                    <div class="${this.options.classes.footerData}"></div>
                    <div class="${this.options.classes.footerButtons}"></div>
                </div>
            </div>
        `;
    }

    tplStat() {
        return `
            <div>${this.locale.selectedFiles}: ${this.files.length}</div>
            <div>${this.locale.totalSize}: ${this.fileSize(this.totalSize())}</div>
        `;
    }

    totalSize() {
        let sum = function (items, prop) {
            return items.reduce(function (a, b) {
                return a + b[prop];
            }, 0);
        };

        return sum(this.files, 'size');
    }

    fileSize(bytes, dp = 1) {
        const thresh = 1024;

        if (Math.abs(bytes) < thresh) {
            return bytes + ' B';
        }

        const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let u = -1;
        const r = 10 ** dp;

        do {
            bytes /= thresh;
            ++u;
        } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

        return bytes.toFixed(dp) + ' ' + units[u];
    }

}