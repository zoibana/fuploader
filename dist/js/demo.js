/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Fuploader.js":
/*!**********************!*\
  !*** ./Fuploader.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Fuploader)
/* harmony export */ });
/* harmony import */ var _source_js_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source/js/Button */ "./source/js/Button.js");
/* harmony import */ var _source_js_Progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source/js/Progressbar */ "./source/js/Progressbar.js");
/* harmony import */ var _source_js_Status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./source/js/Status */ "./source/js/Status.js");
/* harmony import */ var _source_js_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source/js/Icon */ "./source/js/Icon.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Fuploader = /*#__PURE__*/function () {
  function Fuploader(element) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Fuploader);

    this.el = element;
    var defaults = {
      locale: null,
      lang: 'en',
      upload_url: '/upload.php',
      name: 'file',
      width: '100%',
      height: '400px',
      formData: {},
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
        fileStatus: 'fuploader-filelist-file-status'
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
    this.addButton = _source_js_Button__WEBPACK_IMPORTED_MODULE_0__["default"].primary('+');
    this.cancelButton = _source_js_Button__WEBPACK_IMPORTED_MODULE_0__["default"].secondary(this.locale.cancel);
    this.uploadButton = _source_js_Button__WEBPACK_IMPORTED_MODULE_0__["default"].primary(this.locale.upload);
    this.reloadButton = _source_js_Button__WEBPACK_IMPORTED_MODULE_0__["default"].primary(this.locale.uploadMore);
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

  _createClass(Fuploader, [{
    key: "initEvents",
    value: function initEvents() {
      var _this = this;

      this.el.addEventListener("dragenter", this.dragOver.bind(this), false);
      this.el.addEventListener("dragover", this.dragOver.bind(this), false);
      this.el.addEventListener("dragexit", this.dragLeave.bind(this), false);
      this.el.addEventListener("dragleave", this.dragLeave.bind(this), false);
      this.el.addEventListener("drop", this.dropped.bind(this), false);
      this.input.addEventListener('change', this.processInputFiles.bind(this));
      this.addButton.addEventListener('click', function (e) {
        e.preventDefault();

        _this.input.click();

        return false;
      });
      this.cancelButton.addEventListener('click', function (e) {
        e.preventDefault();

        _this.cancel();

        return false;
      });
      this.uploadButton.addEventListener('click', function (e) {
        e.preventDefault();

        _this.uploadFiles();

        return false;
      });
      this.reloadButton.addEventListener('click', function (e) {
        e.preventDefault();

        _this.cancel();

        return false;
      });
      this.filelistItems.addEventListener('click', function (event) {
        var className = _this.options.classes.fileRemove;
        var target = event.target;

        if (target.classList.contains(className) || target.closest('.' + className)) {
          event.preventDefault();
          var index = parseInt(target.closest('.' + _this.options.classes.file).dataset.index);

          _this.files.splice(index, 1);

          _this.renderFiles();

          return false;
        }
      });
    }
  }, {
    key: "renderDefaultLayout",
    value: function renderDefaultLayout() {
      var layout = [];
      layout.push(this.tplFilelist());
      layout.push(this.dropzoneTpl());
      this.el.innerHTML = layout.join('');
    }
  }, {
    key: "dragOver",
    value: function dragOver(event) {
      event.stopPropagation();
      event.preventDefault();

      if (this.isUploading) {
        event.dataTransfer.dropEffect = 'none';
      } else {
        this.el.classList.add(this.options.classes.dragOver);
        event.dataTransfer.dropEffect = 'copy';
      }
    }
  }, {
    key: "dragLeave",
    value: function dragLeave() {
      this.el.classList.remove(this.options.classes.dragOver);
    }
  }, {
    key: "dropped",
    value: function dropped(event) {
      event.stopPropagation();
      event.preventDefault();
      this.dragLeave();

      if (!this.isUploading) {
        this.handleFiles(event.dataTransfer.files);
      }
    }
  }, {
    key: "processInputFiles",
    value: function processInputFiles() {
      this.handleFiles(this.input.files);
    }
  }, {
    key: "handleFiles",
    value: function handleFiles(files) {
      var _this2 = this;

      if (this.isDone) {
        this.cancel();
      }

      _toConsumableArray(files).forEach(function (file) {
        _this2.files.push(file);
      });

      this.renderFiles();
    }
  }, {
    key: "showFilelist",
    value: function showFilelist() {
      this.dropzone.classList.add('hidden');
      this.filelist.classList.remove('hidden');
    }
  }, {
    key: "hideFileList",
    value: function hideFileList() {
      this.dropzone.classList.remove('hidden');
      this.filelist.classList.add('hidden');
    }
  }, {
    key: "renderFiles",
    value: function renderFiles() {
      var _this3 = this;

      var tpl = [];
      this.files.forEach(function (file, index) {
        tpl.push(_this3.fileTpl(file, index));

        if (file.type.match('image/*')) {
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onloadend = function (event) {
            var imageElement = _this3.filelistItems.querySelectorAll('.' + _this3.options.classes.file)[index];

            imageElement.querySelector('.' + _this3.options.classes.fileIconImage).style.backgroundImage = 'url(' + event.target.result + ')';
          };
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
  }, {
    key: "uploadFiles",
    value: function uploadFiles() {
      this.addButton.classList.add('hidden');
      this.reloadButton.classList.add('hidden');
      this.uploadButton.classList.add('hidden');

      if (this.files.length) {
        var file = this.files[this.uploadIndex];
        this.uploadFile(file, this.uploadIndex);
      }
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file, index) {
      var _this4 = this;

      var fileElement = this.filelistItems.querySelectorAll('.' + this.options.classes.file)[index];
      var progressBar = fileElement.querySelector('.' + this.options.classes.fileProgress);
      var removeButton = fileElement.querySelector('.' + this.options.classes.fileRemove);
      var statusContainer = fileElement.querySelector('.' + this.options.classes.fileStatus);
      removeButton.classList.add('hidden');
      progressBar.classList.remove('hidden');
      var formData = new FormData();
      formData.append(this.options.name, file);
      Object.entries(this.options.formData).forEach(function (attr) {
        formData.append(attr[0], attr[1]);
      });
      var totalProgress = this.uploadIndex / this.files.length * 100;
      this.footerStat.innerHTML = _source_js_Progressbar__WEBPACK_IMPORTED_MODULE_1__["default"].render(totalProgress);
      this.xhr = new XMLHttpRequest();

      this.xhr.onprogress = function (event) {
        var percent_completed = event.loaded / event.total * 100;
        progressBar.innerHTML = _source_js_Progressbar__WEBPACK_IMPORTED_MODULE_1__["default"].render(percent_completed);
      };

      this.xhr.addEventListener('load', function () {
        var status = parseInt(_this4.xhr.status);
        progressBar.classList.add('hidden');

        if (status === 200) {
          statusContainer.innerHTML = _source_js_Status__WEBPACK_IMPORTED_MODULE_2__["default"].success(_this4.locale.uploaded);
        } else {
          statusContainer.innerHTML = _source_js_Status__WEBPACK_IMPORTED_MODULE_2__["default"].error(_this4.locale.error);
        }

        _this4.uploadIndex++;

        if (_this4.uploadIndex + 1 > _this4.files.length) {
          _this4.uploaded();

          return;
        }

        var file = _this4.files[_this4.uploadIndex];

        _this4.uploadFile(file, _this4.uploadIndex);
      });
      this.xhr.open("POST", this.options.upload_url, true);
      this.xhr.send(formData);
    }
  }, {
    key: "uploaded",
    value: function uploaded() {
      this.isUploading = false;
      this.isDone = true;
      this.footerStat.innerHTML = _source_js_Status__WEBPACK_IMPORTED_MODULE_2__["default"].success(this.locale.allFilesUploaded);
      this.cancelButton.classList.add('hidden');
      this.reloadButton.classList.remove('hidden');
    }
  }, {
    key: "cancel",
    value: function cancel() {
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
  }, {
    key: "dropzoneTpl",
    value: function dropzoneTpl() {
      return "\n            <label class=\"".concat(this.options.classes.dropzone, "\">\n                <div>\n                    <input type=\"file\" multiple>\n                    <div class=\"").concat(this.options.classes.dropzoneLabel, "\">").concat(this.locale.dragFilesHere, "</div>\n                    ").concat(_source_js_Button__WEBPACK_IMPORTED_MODULE_0__["default"].primary(this.locale.orChooseFileFromComputer, 'span').outerHTML, "\n                </div>\n            </label>\n            <div class=\"").concat(this.options.classes.dropzoneArea, " hidden\">\n                <div>").concat(this.locale.dropFilesHere, "</div>\n            </div>\n        ");
    }
  }, {
    key: "fileTpl",
    value: function fileTpl(file) {
      return "\n            <div class=\"".concat(this.options.classes.file, "\">\n                <div class=\"").concat(this.options.classes.fileIcon, " ").concat(file.type.match('image.*') ? this.options.classes.fileIconImage : '', "\">\n                    ").concat(_source_js_Icon__WEBPACK_IMPORTED_MODULE_3__["default"].file(), "\n                </div>\n                <div class=\"").concat(this.options.classes.filelistData, "\">\n                    <div class=\"").concat(this.options.classes.filelistDataTitle, "\">").concat(file.name, "</div>\n                    <div class=\"").concat(this.options.classes.filelistDataSize, "\">").concat(this.fileSize(file.size), "</div>\n                </div>\n                <div class=\"").concat(this.options.classes.filelistActions, "\">\n                    <div class=\"").concat(this.options.classes.fileProgress, "\"></div>\n                    <div class=\"").concat(this.options.classes.fileStatus, "\"></div>\n                    <div class=\"").concat(this.options.classes.fileRemove, "\">\n                        ").concat(_source_js_Icon__WEBPACK_IMPORTED_MODULE_3__["default"].trash(), "\n                    </div>\n                </div>\n            </div>\n        ");
    }
  }, {
    key: "tplFilelist",
    value: function tplFilelist() {
      return "\n            <div class=\"".concat(this.options.classes.filelist, " hidden\">\n                <div class=\"").concat(this.options.classes.filelistItems, "\"></div>\n                <div class=\"").concat(this.options.classes.footer, "\">\n                    <div class=\"").concat(this.options.classes.footerData, "\"></div>\n                    <div class=\"").concat(this.options.classes.footerButtons, "\"></div>\n                </div>\n            </div>\n        ");
    }
  }, {
    key: "tplStat",
    value: function tplStat() {
      return "\n            <div>".concat(this.locale.selectedFiles, ": ").concat(this.files.length, "</div>\n            <div>").concat(this.locale.totalSize, ": ").concat(this.fileSize(this.totalSize()), "</div>\n        ");
    }
  }, {
    key: "totalSize",
    value: function totalSize() {
      var sum = function sum(items, prop) {
        return items.reduce(function (a, b) {
          return a + b[prop];
        }, 0);
      };

      return sum(this.files, 'size');
    }
  }, {
    key: "fileSize",
    value: function fileSize(bytes) {
      var dp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var thresh = 1024;

      if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
      }

      var units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      var u = -1;
      var r = Math.pow(10, dp);

      do {
        bytes /= thresh;
        ++u;
      } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

      return bytes.toFixed(dp) + ' ' + units[u];
    }
  }]);

  return Fuploader;
}();

_defineProperty(Fuploader, "lang", {
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
    'selectedFiles': 'Selected'
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
    'selectedFiles': 'Выбрано файлов'
  }
});



/***/ }),

/***/ "./source/demo.js":
/*!************************!*\
  !*** ./source/demo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fuploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fuploader */ "./Fuploader.js");

new _Fuploader__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('#uploader'), {
  formData: {
    _csrf: 'testCsrf',
    testAttr: 'testValue'
  }
});

/***/ }),

/***/ "./source/js/Button.js":
/*!*****************************!*\
  !*** ./source/js/Button.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Button = /*#__PURE__*/function () {
  function Button() {
    _classCallCheck(this, Button);
  }

  _createClass(Button, null, [{
    key: "primary",
    value: function primary(label) {
      var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'button';
      var button = this.render(label, tag);
      button.classList.add('fready-button-primary');
      return button;
    }
  }, {
    key: "secondary",
    value: function secondary(label) {
      var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'button';
      var button = this.render(label, tag);
      button.classList.add('fready-button-secondary');
      return button;
    }
  }, {
    key: "render",
    value: function render(label) {
      var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'button';
      var button = document.createElement(tag);
      button.classList.add('fready-button');
      button.innerHTML = label;
      return button;
    }
  }]);

  return Button;
}();



/***/ }),

/***/ "./source/js/Icon.js":
/*!***************************!*\
  !*** ./source/js/Icon.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Icon = /*#__PURE__*/function () {
  function Icon() {
    _classCallCheck(this, Icon);
  }

  _createClass(Icon, null, [{
    key: "file",
    value: function file() {
      return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"fready-icon\" viewBox=\"0 0 16 16\">\n                <path d=\"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z\"/>\n            </svg>\n        ";
    }
  }, {
    key: "trash",
    value: function trash() {
      return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"fready-icon\" viewBox=\"0 0 16 16\">\n                <path d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z\"/>\n            </svg>\n        ";
    }
  }, {
    key: "check",
    value: function check() {
      return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"fready-icon\" viewBox=\"0 0 16 16\">\n                <path d=\"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z\"/>\n            </svg>\n        ";
    }
  }, {
    key: "warning",
    value: function warning() {
      return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"fready-icon\" viewBox=\"0 0 16 16\">\n                <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"/>\n            </svg>\n        ";
    }
  }]);

  return Icon;
}();



/***/ }),

/***/ "./source/js/Progressbar.js":
/*!**********************************!*\
  !*** ./source/js/Progressbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Progressbar)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Progressbar = /*#__PURE__*/function () {
  function Progressbar() {
    _classCallCheck(this, Progressbar);
  }

  _createClass(Progressbar, null, [{
    key: "render",
    value: function render() {
      var percents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return "\n                <div class=\"fready-progress-bar\">\n                    <div style=\"width: ".concat(percents, "%\"></div>\n                </div>\n            ");
    }
  }]);

  return Progressbar;
}();



/***/ }),

/***/ "./source/js/Status.js":
/*!*****************************!*\
  !*** ./source/js/Status.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Status)
/* harmony export */ });
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./source/js/Icon.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Status = /*#__PURE__*/function () {
  function Status() {
    _classCallCheck(this, Status);
  }

  _createClass(Status, null, [{
    key: "success",
    value: function success(message) {
      return "\n                <div class=\"fready-status success\">\n                    ".concat(_Icon__WEBPACK_IMPORTED_MODULE_0__["default"].check(), "\n                    <span>").concat(message, "</span>\n                </div>\n            ");
    }
  }, {
    key: "error",
    value: function error(message) {
      return "\n                <div class=\"fready-status error\">\n                    ".concat(_Icon__WEBPACK_IMPORTED_MODULE_0__["default"].warning(), "\n                    <span>").concat(message, "</span>\n                </div>\n            ");
    }
  }, {
    key: "warning",
    value: function warning(message) {
      return "\n                <div class=\"fready-status warning\">\n                    ".concat(_Icon__WEBPACK_IMPORTED_MODULE_0__["default"].warning(), "\n                    <span>").concat(message, "</span>\n                </div>\n            ");
    }
  }]);

  return Status;
}();



/***/ }),

/***/ "./source/sass/fuploader.scss":
/*!************************************!*\
  !*** ./source/sass/fuploader.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/demo": 0,
/******/ 			"dist/css/fuploader": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_zoibana_fuploader"] = self["webpackChunk_zoibana_fuploader"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/fuploader"], () => (__webpack_require__("./source/demo.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/fuploader"], () => (__webpack_require__("./source/sass/fuploader.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;