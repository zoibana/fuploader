import HumanSize from "./HumanSize";
import Icon from "./Icon";
import Status from "./Status";

export default class FileItem {

    static options = {};

    imageContent = null;

    chunkStart = 0;

    constructor(file) {
        this.file = file;
    }

    isImage() {
        return this.type.match('image/*');
    }

    get type() {
        return this.file.type;
    }

    get name() {
        return this.file.name;
    }

    get lastModified() {
        return this.file.lastModified;
    }

    get size() {
        return this.file.size;
    }

    get humanSize() {
        return HumanSize.from(this.size);
    }

    isChunked(chunkSize) {
        return this.size > chunkSize;
    }

    getTotalChunks(chunkSize) {
        return Math.ceil(this.size / chunkSize);
    }

    chunk(chunkSize) {
        this.chunkEnd = this.chunkStart + chunkSize;
        return this.file.slice(this.chunkStart, this.chunkEnd);
    }

    isValid() {
        return this.isValidFileSize() && this.isValidFileType();
    }

    isValidFileSize() {
        let maxFileSize = FileItem.options.maxFileSize;
        return !maxFileSize || this.size < (maxFileSize * 1024 * 1024);
    }

    isValidFileType() {
        let fileTypes = FileItem.options.acceptedFileTypes;

        if (!fileTypes || fileTypes === '*') {
            return true;
        }

        if (Array.isArray(fileTypes)) {
            for (let fileType of fileTypes) {
                if (fileType === '*' || this.type.match(fileType)) {
                    return true;
                }
            }
            return false;
        }

        return this.type.match(fileTypes);
    }

    onLoadImage(onLoad) {
        if (this.isImage()) {
            if (this.imageContent === null) {
                let reader = new FileReader();
                reader.readAsDataURL(this.file);
                reader.onloadend = (event) => {
                    this.imageContent = event.target.result;
                    onLoad(this.imageContent);
                }
            } else {
                onLoad(this.imageContent);
            }
        }
    }

    render(index) {
        let classes = FileItem.options.classes;
        let lang = Fuploader.lang[FileItem.options.lang];

        let status = '';
        if (!this.isValidFileType()) {
            status = Status.error(lang.fileTypeIsNotAllowed);
        }
        if (!this.isValidFileSize()) {
            status = Status.error(lang.fileIsTooBig.replace("{{maxFilesize}}", FileItem.options.maxFileSize + ' mb'));
        }

        return `
            <div class="${classes.file}" data-index="${index}">
                <div class="${classes.fileIcon} ${this.isImage() ? classes.fileIconImage : ''}" >
                    ${Icon.file()}
                </div>
                <div class="${classes.filelistData}">
                    <div class="${classes.filelistDataTitle}">${this.name}</div>
                    <div class="${classes.filelistDataSize}">${this.humanSize}${this.type ? ', [' + this.type + ']' : ''}</div>
                </div>
                <div class="${classes.filelistActions}">
                    <div class="${classes.fileProgress}"></div>
                    <div class="${classes.fileStatus}">${status}</div>
                    <div class="${classes.fileRemove}">
                        ${Icon.x()}
                    </div>
                </div>
            </div>
        `;
    }
}