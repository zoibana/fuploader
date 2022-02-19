import Button from "./source/js/Button";
import Progressbar from "./source/js/Progressbar";
import Status from "./source/js/Status";
import FileItem from "./source/js/FileItem";
import HumanSize from "./source/js/HumanSize";
import Sortable from "sortablejs";

export default class Fuploader {

    static lang = {
        'en': {
            upload: 'Upload',
            uploadMore: 'Upload more',
            cancel: 'Cancel',
            uploaded: 'Uploaded',
            error: 'Error',
            allFilesUploaded: 'Files are uploaded',
            dragFilesHere: 'Drag files here',
            chooseFileFromComputer: 'Choose file from computer',
            orChooseFileFromComputer: 'Or choose file from computer',
            dropFilesHere: 'Drop files here',
            totalSize: 'Total size',
            selectedFiles: 'Selected',
            maxFilesLimitReached: 'Max files limit reached',
            fileTypeIsNotAllowed: 'File type is not allowed',
            fileIsTooBig: 'File is too big. Max filesize: {{maxFilesize}}',
        },
        'ru': {
            upload: 'Загрузить',
            uploadMore: 'Загрузить еще',
            cancel: 'Отмена',
            uploaded: 'Загружен',
            error: 'Ошибка',
            allFilesUploaded: 'Файлы загружены',
            dragFilesHere: 'Перетащите файл сюда',
            chooseFileFromComputer: 'Выберите на компьютере',
            orChooseFileFromComputer: 'Или выберите на компьютере',
            dropFilesHere: 'Бросьте файл в эту область',
            totalSize: 'Общий вес',
            selectedFiles: 'Выбрано файлов',
            maxFilesLimitReached: 'Уже выбрано максимально разрешенное кол-во файлов',
            fileTypeIsNotAllowed: 'Формат файла не разрешен',
            fileIsTooBig: 'Файл слишком тяжелый. Макс вес: {{maxFilesize}}',
        },
    }

    constructor(element, params = {}) {

        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        if (!element) {
            return;
        }

        this.el = element;

        let defaults = {
            locale: null,
            lang: 'en',
            upload_url: '/upload.php',
            name: 'file',
            width: '100%',
            height: '400px',
            paste: true,
            dragDrop: true,
            maxFiles: 0,
            maxFileSize: 0, // in Megabytes
            sortable: false,
            parallel: false,
            acceptedFileTypes: '*',
            formData: {},
            headers: {
                Accept: "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest",
            },
            classes: {
                container: 'fuploader',
                dropzone: 'fuploader-dropzone',
                dropzoneLabel: 'fuploader-dropzone-label',
                dropzoneArea: 'fuploader-dropzone-area',
                filelist: 'fuploader-filelist',
                filelistItems: 'fuploader-filelist-files',
                filelistData: 'fuploader-filelist-file-data',
                filelistDataTitle: 'fuploader-filelist-file-data-title',
                filelistDataSize: 'fuploader-filelist-file-data-size',
                filelistActions: 'fuploader-filelist-file-actions',
                filelistNotice: 'fuploader-filelist-notice',
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

        FileItem.options = this.options;

        this.el.classList.add(this.options.classes.container);
        this.el.style.width = Number.isInteger(this.options.width) ? this.options.width + 'px' : this.options.width;
        this.el.style.height = Number.isInteger(this.options.height) ? this.options.height + 'px' : this.options.height;

        this.renderDefaultLayout();

        this.dropzone = this.el.querySelector('.' + this.options.classes.dropzone);
        this.dropzoneArea = this.el.querySelector('.' + this.options.classes.dropzoneArea);
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
        this.isUploading = false;
        this.isDone = false;
        this.dragDropDisabled = false;
        this.sortable = null;
        this.uploadedFiles = 0;
        this.totalProgressBar = null;

        this.initEvents();
    }

    initEvents() {

        if (this.options.paste) {
            let pasteHandler = this.onPaste.bind(this);
            this.el.addEventListener('mouseenter', (e) => {
                this.el.addEventListener("paste", pasteHandler);
            });
            this.el.addEventListener('mouseleave', (e) => {
                this.el.removeEventListener("paste", pasteHandler);
            });
        }

        if (this.options.dragDrop) {
            this.el.addEventListener("dragenter", this.onDragOver.bind(this), false);
            this.el.addEventListener("dragover", this.onDragOver.bind(this), false);
            this.el.addEventListener("dragexit", this.onDragLeave.bind(this), false);
            this.el.addEventListener("dragleave", this.onDragLeave.bind(this), false);
            this.el.addEventListener("drop", this.onDropped.bind(this), false);
        }

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

    onPaste(event) {
        event.preventDefault();
        event.stopPropagation();
        let items = (event.clipboardData || event.originalEvent.clipboardData).items;
        for (let index in items) {
            let item = items[index];
            if (item.kind === 'file') {
                let blob = item.getAsFile();
                if (blob) {
                    this.handleFiles([blob]);
                    return;
                }
            }
        }
        return false;
    }

    onDragOver(event) {
        if (!this.dragDropDisabled) {
            event.stopPropagation();
            event.preventDefault();

            if (this.isUploading) {
                event.dataTransfer.dropEffect = 'none';
            } else {
                this.dropzoneArea.classList.remove('hidden');
                event.dataTransfer.dropEffect = 'copy';
            }
        }
    }

    onDragLeave() {
        this.dropzoneArea.classList.add('hidden');
    }

    onDropped(event) {
        if (!this.dragDropDisabled) {
            event.stopPropagation();
            event.preventDefault();

            this.onDragLeave();

            if (!this.isUploading) {
                this.handleFiles(event.dataTransfer.files);
            }
        }
    }

    processInputFiles() {
        this.handleFiles(this.input.files);
    }

    handleFiles(files) {

        let BreakException = {};

        if (this.isDone) {
            this.cancel();
        }

        if (this.isMaxFilesLimitReached()) {
            return;
        }

        try {
            ([...files]).forEach((file) => {

                let fupFile = new FileItem(file, this.options.acceptedFileTypes);

                this.files.push(fupFile);

                if (this.isMaxFilesLimitReached()) {
                    throw BreakException;
                }
            });
        } catch (e) {

        }

        this.renderFiles();
    }

    isMaxFilesLimitReached() {
        return this.options.maxFiles && this.files.length >= this.options.maxFiles;
    }

    showFilelist() {
        this.dropzone.classList.add('hidden');
        this.filelist.classList.remove('hidden');
    }

    hideFileList() {
        this.dropzone.classList.remove('hidden');
        this.filelist.classList.add('hidden');
    }

    getFiles() {
        return this.filelist.querySelectorAll('.' + this.options.classes.file);
    }

    renderFiles() {
        let tpl = [];

        this.files.forEach((file, index) => {
            tpl.push(file.render(index));
        });

        if (this.isMaxFilesLimitReached()) {
            tpl.push(`<div class="${this.options.classes.filelistNotice}">${this.locale.maxFilesLimitReached}</div>`);
        }

        if (this.files.length) {
            this.showFilelist();

            this.filelistItems.innerHTML = tpl.join('');

            this.footerStat.innerHTML = this.tplStat();

            if (this.isMaxFilesLimitReached()) {
                this.dragDropDisabled = true;
                this.addButton.classList.add('hidden');
            } else {
                this.dragDropDisabled = false;
                this.addButton.classList.remove('hidden');
            }

            this.files.forEach((file, index) => {
                file.onLoadImage((fileUrl) => {
                    let fileItem = this.getFiles()[index];
                    let fileItemIcon = fileItem.querySelector('.' + this.options.classes.fileIconImage);
                    fileItemIcon.style.backgroundImage = 'url(' + fileUrl + ')';
                });
            });

            if (this.options.sortable) {
                if (this.sortable) {
                    this.sortable.destroy();
                    this.sortable = null;
                }

                this.sortable = Sortable.create(this.filelistItems, {
                    animation: 150,
                    onStart: () => {
                        this.dragDropDisabled = true;
                    },
                    onEnd: () => {
                        this.dragDropDisabled = false;
                        this.updateFileListOrder();
                    }
                });
            }

        } else {
            this.hideFileList();
        }
    }

    updateFileListOrder() {
        let filesList = [];
        let newOrderedFiles = this.filelistItems.querySelectorAll('.' + this.options.classes.file);
        newOrderedFiles.forEach((file) => {
            let index = file.dataset.index;
            filesList.push(this.files[index]);
        });
        this.files = filesList;
        this.renderFiles();
    }

    uploadFiles() {
        this.addButton.classList.add('hidden');
        this.reloadButton.classList.add('hidden');
        this.uploadButton.classList.add('hidden');
        this.dragDropDisabled = true;

        if (this.sortable) {
            this.sortable.destroy();
            this.sortable = null;
        }

        this.getFiles().forEach((file) => {
            let removeButton = file.querySelector('.' + this.options.classes.fileRemove);
            removeButton.classList.add('hidden');
        });

        this.totalProgress();

        if (this.files.length) {

            // Parallel uploading
            if (this.options.parallel) {
                this.files.forEach((file, index) => {
                    this.uploadFile(file, index);
                })
            }
            // One by one uploading
            else {
                let onLoaded = function () {
                    let fuploader = this;
                    let file = fuploader.files[fuploader.uploadedFiles];
                    fuploader.uploadFile(file, fuploader.uploadedFiles, onLoaded);
                };

                let file = this.files[this.uploadedFiles];
                this.uploadFile(file, this.uploadedFiles, onLoaded);

            }
        }
    }

    uploadFile(file, index, onLoaded = null) {

        let fileElement = this.getFiles()[index];

        if (!file || !fileElement) {
            return;
        }

        let loaded = () => {
            this.uploadedFiles++;

            this.totalProgress((this.uploadedFiles / this.files.length) * 100);

            if (onLoaded) {
                onLoaded.call(this);
            }

            if (this.uploadedFiles === this.files.length) {
                this.uploaded();
            }
        }

        let progressBar = fileElement.querySelector('.' + this.options.classes.fileProgress);
        let statusContainer = fileElement.querySelector('.' + this.options.classes.fileStatus);

        progressBar.classList.remove('hidden');

        if (!file.isValid()) {
            loaded();
            return;
        }

        progressBar.innerHTML = Progressbar.render(0);

        let formData = new FormData();
        formData.append(this.options.name, file);
        formData = this.buildFormData(formData, this.options.formData);

        let xhr = new XMLHttpRequest();

        // Some browsers do not have the .upload property
        let progressProperty = xhr.upload != null ? xhr.upload : xhr;
        progressProperty.onprogress = event => {
            let percent_completed = Math.ceil(event.loaded / event.total * 100);
            progressBar.innerHTML = Progressbar.render(percent_completed);
        };
        xhr.onerror = () => {
            statusContainer.innerHTML = Status.error(this.locale.error);
        };
        xhr.onload = () => {
            let status = Number(xhr.status);
            progressBar.classList.add('hidden');
            if (status === 200) {
                statusContainer.innerHTML = Status.success(this.locale.uploaded);
            } else {
                statusContainer.innerHTML = Status.error(this.locale.error);
            }
            loaded();
        };
        xhr.open("POST", this.options.upload_url, true);

        let headers = this.options.headers;
        for (let headerName in headers) {
            let headerValue = headers[headerName];
            if (headerValue) {
                xhr.setRequestHeader(headerName, headerValue);
            }
        }

        xhr.send(formData);
    }

    buildFormData(formData, data, parentKey) {
        if (typeof data === 'function') {
            data = data();
        }

        if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
            Object.keys(data).forEach(key => {
                this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
            });
        } else {
            const value = data == null ? '' : data;

            formData.append(parentKey, value);
        }
        return formData;
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
        this.uploadedFiles = 0;
        this.dragDropDisabled = false;

        if (this.sortable) {
            this.sortable.destroy();
            this.sortable = null;
        }

        this.totalProgressBar = null;
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
                    ${this.options.dragDrop ? '<div class="' + this.options.classes.dropzoneLabel + '">' + this.locale.dragFilesHere + '</div>' : ''}
                    ${Button.primary(this.options.dragDrop ? this.locale.orChooseFileFromComputer : this.locale.chooseFileFromComputer, 'span').outerHTML}
                </div>
            </label>
            <div class="${this.options.classes.dropzoneArea} hidden">
                <div>${this.locale.dropFilesHere}</div>
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
            <div>
                ${this.locale.selectedFiles}: ${this.files.length}${this.options.maxFiles > 0 ? '/' + this.options.maxFiles : ''}
            </div>
            <div>${this.locale.totalSize}: ${HumanSize.from(this.totalSize())}</div>
        `;
    }

    totalProgress(percents = 0) {
        let percent = Number(percents).toFixed(0);
        if (!this.totalProgressBar) {
            this.footerStat.innerHTML = Progressbar.render(percent);
            this.totalProgressBar = this.footerStat.querySelector('.fready-progress-bar div');
        }
        this.footerStat.querySelector('.fready-progress-percent').innerHTML = percent + '%';
        this.totalProgressBar.style.width = percent + '%';
    }

    totalSize() {
        let sum = function (items, prop) {
            return items.reduce(function (a, b) {
                return a + b[prop];
            }, 0);
        };

        return sum(this.files, 'size');
    }

}

window.Fuploader = Fuploader;