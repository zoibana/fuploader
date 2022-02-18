(()=>{"use strict";var e,t={918:(e,t,i)=>{function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}i.d(t,{Z:()=>b});var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,s;return t=e,s=[{key:"primary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"button",i=this.render(e,t);return i.classList.add("fready-button-primary"),i}},{key:"secondary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"button",i=this.render(e,t);return i.classList.add("fready-button-secondary"),i}},{key:"render",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"button",i=document.createElement(t);return i.classList.add("fready-button"),i.innerHTML=e,i}}],(i=null)&&n(t.prototype,i),s&&n(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,n;return t=e,n=[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return'\n                <div class="fready-progress-bar">\n                    <div style="width: '.concat(e,'%"></div>\n                </div>\n            ')}}],(i=null)&&o(t.prototype,i),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,n;return t=e,n=[{key:"file",value:function(){return'\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fready-icon" viewBox="0 0 16 16">\n                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>\n            </svg>\n        '}},{key:"trash",value:function(){return'\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fready-icon" viewBox="0 0 16 16">\n                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>\n            </svg>\n        '}},{key:"check",value:function(){return'\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fready-icon" viewBox="0 0 16 16">\n                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>\n            </svg>\n        '}},{key:"warning",value:function(){return'\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fready-icon" viewBox="0 0 16 16">\n                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>\n            </svg>\n        '}}],(i=null)&&r(t.prototype,i),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,n;return t=e,n=[{key:"success",value:function(e){return'\n                <div class="fready-status success">\n                    '.concat(l.check(),"\n                    <span>").concat(e,"</span>\n                </div>\n            ")}},{key:"error",value:function(e){return'\n                <div class="fready-status error">\n                    '.concat(l.warning(),"\n                    <span>").concat(e,"</span>\n                </div>\n            ")}},{key:"warning",value:function(e){return'\n                <div class="fready-status warning">\n                    '.concat(l.warning(),"\n                    <span>").concat(e,"</span>\n                </div>\n            ")}}],(i=null)&&c(t.prototype,i),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y,g,m,b=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};p(this,e),this.el=t;var n={locale:null,lang:"en",upload_url:"/upload.php",name:"file",width:"100%",height:"400px",formData:{},classes:{container:"fuploader",dropzone:"fuploader-dropzone",dropzoneLabel:"fuploader-dropzone-label",dropzoneArea:"fuploader-dropzone-area",dragOver:"dragover",filelist:"fuploader-filelist",filelistItems:"fuploader-filelist-files",filelistData:"fuploader-filelist-file-data",filelistDataTitle:"fuploader-filelist-file-data-title",filelistDataSize:"fuploader-filelist-file-data-size",filelistActions:"fuploader-filelist-file-actions",footer:"fuploader-footer",footerData:"fuploader-footer-data",footerButtons:"fuploader-footer-buttons",file:"fuploader-filelist-file",fileIcon:"fuploader-filelist-file-icon",fileIconImage:"fuploader-file-image",fileRemove:"fuploader-filelist-file-remove",fileProgress:"fuploader-filelist-file-progress",fileStatus:"fuploader-filelist-file-status"}};this.options=Object.assign(n,i),this.locale=e.lang[this.options.lang]||e.lang.en,this.el.classList.add(this.options.classes.container),this.el.style.width=Number.isInteger(this.options.width)?this.options.width+"px":this.options.width,this.el.style.height=Number.isInteger(this.options.height)?this.options.height+"px":this.options.height,this.renderDefaultLayout(),this.dropzone=this.el.querySelector("."+this.options.classes.dropzone),this.filelist=this.el.querySelector("."+this.options.classes.filelist),this.filelistItems=this.filelist.querySelector("."+this.options.classes.filelistItems),this.footer=this.el.querySelector("."+this.options.classes.footer),this.footerStat=this.footer.querySelector("."+this.options.classes.footerData),this.footerButtons=this.footer.querySelector("."+this.options.classes.footerButtons),this.input=this.el.querySelector('input[type="file"]'),this.addButton=s.primary("+"),this.cancelButton=s.secondary(this.locale.cancel),this.uploadButton=s.primary(this.locale.upload),this.reloadButton=s.primary(this.locale.uploadMore),this.reloadButton.classList.add("hidden"),this.footerButtons.append(this.addButton),this.footerButtons.append(this.cancelButton),this.footerButtons.append(this.uploadButton),this.footerButtons.append(this.reloadButton),this.files=[],this.uploadIndex=0,this.isUploading=!1,this.isDone=!1,this.xhr=null,this.initEvents()}var t,i,n;return t=e,i=[{key:"initEvents",value:function(){var e=this;this.el.addEventListener("paste",(function(t){t.preventDefault();var i=(t.clipboardData||t.originalEvent.clipboardData).items;for(var n in i){var s=i[n];if("file"===s.kind){var o=s.getAsFile();o&&e.handleFiles([o])}}return!1})),this.el.addEventListener("dragenter",this.dragOver.bind(this),!1),this.el.addEventListener("dragover",this.dragOver.bind(this),!1),this.el.addEventListener("dragexit",this.dragLeave.bind(this),!1),this.el.addEventListener("dragleave",this.dragLeave.bind(this),!1),this.el.addEventListener("drop",this.dropped.bind(this),!1),this.input.addEventListener("change",this.processInputFiles.bind(this)),this.addButton.addEventListener("click",(function(t){return t.preventDefault(),e.input.click(),!1})),this.cancelButton.addEventListener("click",(function(t){return t.preventDefault(),e.cancel(),!1})),this.uploadButton.addEventListener("click",(function(t){return t.preventDefault(),e.uploadFiles(),!1})),this.reloadButton.addEventListener("click",(function(t){return t.preventDefault(),e.cancel(),!1})),this.filelistItems.addEventListener("click",(function(t){var i=e.options.classes.fileRemove,n=t.target;if(n.classList.contains(i)||n.closest("."+i)){t.preventDefault();var s=parseInt(n.closest("."+e.options.classes.file).dataset.index);return e.files.splice(s,1),e.renderFiles(),!1}}))}},{key:"renderDefaultLayout",value:function(){var e=[];e.push(this.tplFilelist()),e.push(this.dropzoneTpl()),this.el.innerHTML=e.join("")}},{key:"dragOver",value:function(e){e.stopPropagation(),e.preventDefault(),this.isUploading?e.dataTransfer.dropEffect="none":(this.el.classList.add(this.options.classes.dragOver),e.dataTransfer.dropEffect="copy")}},{key:"dragLeave",value:function(){this.el.classList.remove(this.options.classes.dragOver)}},{key:"dropped",value:function(e){e.stopPropagation(),e.preventDefault(),this.dragLeave(),this.isUploading||this.handleFiles(e.dataTransfer.files)}},{key:"processInputFiles",value:function(){this.handleFiles(this.input.files)}},{key:"handleFiles",value:function(e){var t=this;this.isDone&&this.cancel(),f(e).forEach((function(e){t.files.push(e)})),this.renderFiles()}},{key:"showFilelist",value:function(){this.dropzone.classList.add("hidden"),this.filelist.classList.remove("hidden")}},{key:"hideFileList",value:function(){this.dropzone.classList.remove("hidden"),this.filelist.classList.add("hidden")}},{key:"renderFiles",value:function(){var e=this,t=[];this.files.forEach((function(i,n){if(t.push(e.fileTpl(i,n)),i.type.match("image/*")){var s=new FileReader;s.readAsDataURL(i),s.onloadend=function(t){e.filelistItems.querySelectorAll("."+e.options.classes.file)[n].querySelector("."+e.options.classes.fileIconImage).style.backgroundImage="url("+t.target.result+")"}}})),this.files.length?(this.showFilelist(),this.filelistItems.innerHTML=t.join(""),this.footerStat.innerHTML=this.tplStat()):this.hideFileList()}},{key:"uploadFiles",value:function(){if(this.addButton.classList.add("hidden"),this.reloadButton.classList.add("hidden"),this.uploadButton.classList.add("hidden"),this.files.length){var e=this.files[this.uploadIndex];this.uploadFile(e,this.uploadIndex)}}},{key:"uploadFile",value:function(e,t){var i=this,n=this.filelistItems.querySelectorAll("."+this.options.classes.file)[t],s=n.querySelector("."+this.options.classes.fileProgress),o=n.querySelector("."+this.options.classes.fileRemove),r=n.querySelector("."+this.options.classes.fileStatus);o.classList.add("hidden"),s.classList.remove("hidden");var l=new FormData;l.append(this.options.name,e),l=this.buildFormData(l,this.options.formData);var c=this.uploadIndex/this.files.length*100;this.footerStat.innerHTML=a.render(c),this.xhr=new XMLHttpRequest,this.xhr.onprogress=function(e){var t=e.loaded/e.total*100;s.innerHTML=a.render(t)},this.xhr.addEventListener("load",(function(){var e=parseInt(i.xhr.status);if(s.classList.add("hidden"),r.innerHTML=200===e?d.success(i.locale.uploaded):d.error(i.locale.error),i.uploadIndex++,i.uploadIndex+1>i.files.length)i.uploaded();else{var t=i.files[i.uploadIndex];i.uploadFile(t,i.uploadIndex)}})),this.xhr.open("POST",this.options.upload_url,!0),this.xhr.send(l)}},{key:"buildFormData",value:function(e,t,i){var n=this;if("function"==typeof t&&(t=t()),!t||"object"!==u(t)||t instanceof Date||t instanceof File){var s=null==t?"":t;e.append(i,s)}else Object.keys(t).forEach((function(s){n.buildFormData(e,t[s],i?"".concat(i,"[").concat(s,"]"):s)}));return e}},{key:"uploaded",value:function(){this.isUploading=!1,this.isDone=!0,this.footerStat.innerHTML=d.success(this.locale.allFilesUploaded),this.cancelButton.classList.add("hidden"),this.reloadButton.classList.remove("hidden")}},{key:"cancel",value:function(){this.files=[],this.isUploading=!1,this.isDone=!1,this.uploadIndex=0,this.xhr&&this.xhr.abort(),this.reloadButton.classList.add("hidden"),this.addButton.classList.remove("hidden"),this.cancelButton.classList.remove("hidden"),this.uploadButton.classList.remove("hidden"),this.renderFiles()}},{key:"dropzoneTpl",value:function(){return'\n            <label class="'.concat(this.options.classes.dropzone,'">\n                <div>\n                    <input type="file" multiple>\n                    <div class="').concat(this.options.classes.dropzoneLabel,'">').concat(this.locale.dragFilesHere,"</div>\n                    ").concat(s.primary(this.locale.orChooseFileFromComputer,"span").outerHTML,'\n                </div>\n            </label>\n            <div class="').concat(this.options.classes.dropzoneArea,' hidden">\n                <div>').concat(this.locale.dropFilesHere,"</div>\n            </div>\n        ")}},{key:"fileTpl",value:function(e){return'\n            <div class="'.concat(this.options.classes.file,'">\n                <div class="').concat(this.options.classes.fileIcon," ").concat(e.type.match("image.*")?this.options.classes.fileIconImage:"",'">\n                    ').concat(l.file(),'\n                </div>\n                <div class="').concat(this.options.classes.filelistData,'">\n                    <div class="').concat(this.options.classes.filelistDataTitle,'">').concat(e.name,'</div>\n                    <div class="').concat(this.options.classes.filelistDataSize,'">').concat(this.fileSize(e.size),'</div>\n                </div>\n                <div class="').concat(this.options.classes.filelistActions,'">\n                    <div class="').concat(this.options.classes.fileProgress,'"></div>\n                    <div class="').concat(this.options.classes.fileStatus,'"></div>\n                    <div class="').concat(this.options.classes.fileRemove,'">\n                        ').concat(l.trash(),"\n                    </div>\n                </div>\n            </div>\n        ")}},{key:"tplFilelist",value:function(){return'\n            <div class="'.concat(this.options.classes.filelist,' hidden">\n                <div class="').concat(this.options.classes.filelistItems,'"></div>\n                <div class="').concat(this.options.classes.footer,'">\n                    <div class="').concat(this.options.classes.footerData,'"></div>\n                    <div class="').concat(this.options.classes.footerButtons,'"></div>\n                </div>\n            </div>\n        ')}},{key:"tplStat",value:function(){return"\n            <div>".concat(this.locale.selectedFiles,": ").concat(this.files.length,"</div>\n            <div>").concat(this.locale.totalSize,": ").concat(this.fileSize(this.totalSize()),"</div>\n        ")}},{key:"totalSize",value:function(){var e,t;return e=this.files,t="size",e.reduce((function(e,i){return e+i[t]}),0)}},{key:"fileSize",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=1024;if(Math.abs(e)<i)return e+" B";var n=["kB","MB","GB","TB","PB","EB","ZB","YB"],s=-1,o=Math.pow(10,t);do{e/=i,++s}while(Math.round(Math.abs(e)*o)/o>=i&&s<n.length-1);return e.toFixed(t)+" "+n[s]}}],i&&v(t.prototype,i),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();m={en:{upload:"Upload",uploadMore:"Upload more",cancel:"Cancel",uploaded:"Uploaded",error:"Error",allFilesUploaded:"Files are uploaded",dragFilesHere:"Drag files here",orChooseFileFromComputer:"Or choose file from computer",dropFilesHere:"Drop files here",totalSize:"Total size",selectedFiles:"Selected"},ru:{upload:"Загрузить",uploadMore:"Загрузить еще",cancel:"Отмена",uploaded:"Загружен",error:"Ошибка",allFilesUploaded:"Файлы загружены",dragFilesHere:"Перетащите файл сюда",orChooseFileFromComputer:"Или выберите на компьютере",dropFilesHere:"Бросьте файл в эту область",totalSize:"Общий вес",selectedFiles:"Выбрано файлов"}},(g="lang")in(y=b)?Object.defineProperty(y,g,{value:m,enumerable:!0,configurable:!0,writable:!0}):y[g]=m},171:(e,t,i)=>{new(i(918).Z)(document.querySelector("#uploader"),{formData:function(){return{test:1,testForm:{field:(new Date).getDate()}}}})},247:()=>{}},i={};function n(e){var s=i[e];if(void 0!==s)return s.exports;var o=i[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,i,s,o)=>{if(!i){var a=1/0;for(d=0;d<e.length;d++){for(var[i,s,o]=e[d],r=!0,l=0;l<i.length;l++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](i[l])))?i.splice(l--,1):(r=!1,o<a&&(a=o));if(r){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,s,o]},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={446:0,439:0,723:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var s,o,[a,r,l]=i,c=0;if(a.some((t=>0!==e[t]))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(l)var d=l(n)}for(t&&t(i);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},i=self.webpackChunk_zoibana_fuploader=self.webpackChunk_zoibana_fuploader||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),n.O(void 0,[723],(()=>n(171)));var s=n.O(void 0,[723],(()=>n(247)));s=n.O(s)})();