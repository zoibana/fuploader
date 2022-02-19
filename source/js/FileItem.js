import HumanSize from "./HumanSize";
import Icon from "./Icon";
import Status from "./Status";

export default class FileItem {

    static options = {};

    imageContent = null;

    chunkStart = 0;

    constructor(file, fileTypes) {
        this.file = file;
        this.fileTypes = fileTypes;
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

    get isValid() {

        if (!this.fileTypes || this.fileTypes === '*') {
            return true;
        }

        if (Array.isArray(this.fileTypes)) {
            for (let index in this.fileTypes) {
                let fileType = this.fileTypes[index];
                if (fileType === '*' || this.type.match(fileType)) {
                    return true;
                }
            }
            return false;
        }

        return this.type.match(this.fileTypes);
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
                    <div class="${classes.fileStatus}">
                        ${this.isValid ? '' : Status.error(lang.fileTypeIsNotAllowed)}
                    </div>
                    <div class="${classes.fileRemove}">
                        ${Icon.x()}
                    </div>
                </div>
            </div>
        `;
    }
}