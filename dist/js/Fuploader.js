(()=>{"use strict";function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var i,s,n;return i=t,n=[{key:"primary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"button",i=this.render(e,t);return i.classList.add("fready-button-primary"),i}},{key:"secondary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"button",i=this.render(e,t);return i.classList.add("fready-button-secondary"),i}},{key:"render",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"button",i=document.createElement(t);return i.classList.add("fready-button"),i.innerHTML=e,i}}],(s=null)&&e(i.prototype,s),n&&e(i,n),Object.defineProperty(i,"prototype",{writable:!1}),t}();function i(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,s,n;return t=e,n=[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return'\n                <div class="fready-progress-bar">\n                    <div style="width: '.concat(e,'%"></div>\n                </div>\n            ')}}],(s=null)&&i(t.prototype,s),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,s;return t=e,s=[{key:"file",value:function(){return'\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fready-icon" viewBox="0 0 16 16">\n                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>\n            </svg>\n        '}},{key:"trash",value:function(){return'\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fready-icon" viewBox="0 0 16 16">\n                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>\n            </svg>\n        '}},{key:"check",value:function(){return'\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fready-icon" viewBox="0 0 16 16">\n                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>\n            </svg>\n        '}},{key:"warning",value:function(){return'\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fready-icon" viewBox="0 0 16 16">\n                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>\n            </svg>\n        '}}],(i=null)&&n(t.prototype,i),s&&n(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var l,r,c,d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,s;return t=e,s=[{key:"success",value:function(e){return'\n                <div class="fready-status success">\n                    '.concat(a.check(),"\n                    <span>").concat(e,"</span>\n                </div>\n            ")}},{key:"error",value:function(e){return'\n                <div class="fready-status error">\n                    '.concat(a.warning(),"\n                    <span>").concat(e,"</span>\n                </div>\n            ")}},{key:"warning",value:function(e){return'\n                <div class="fready-status warning">\n                    '.concat(a.warning(),"\n                    <span>").concat(e,"</span>\n                </div>\n            ")}}],(i=null)&&o(t.prototype,i),s&&o(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}c={en:{upload:"Upload",uploadMore:"Upload more",cancel:"Cancel",uploaded:"Uploaded",error:"Error",allFilesUploaded:"Files are uploaded",dragFilesHere:"Drag files here",orChooseFileFromComputer:"Or choose file from computer",dropFilesHere:"Drop files here",totalSize:"Total size",selectedFiles:"Selected"},ru:{upload:"Загрузить",uploadMore:"Загрузить еще",cancel:"Отмена",uploaded:"Загружен",error:"Ошибка",allFilesUploaded:"Файлы загружены",dragFilesHere:"Перетащите файл сюда",orChooseFileFromComputer:"Или выберите на компьютере",dropFilesHere:"Бросьте файл в эту область",totalSize:"Общий вес",selectedFiles:"Выбрано файлов"}},(r="lang")in(l=function(){function e(i){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,e),this.el=i;var n={locale:null,lang:"en",upload_url:"/upload.php",name:"file",width:"100%",height:"400px",classes:{container:"fuploader",dropzone:"fuploader-dropzone",dropzoneLabel:"fuploader-dropzone-label",dropzoneArea:"fuploader-dropzone-area",dragOver:"dragover",filelist:"fuploader-filelist",filelistItems:"fuploader-filelist-files",filelistData:"fuploader-filelist-file-data",filelistDataTitle:"fuploader-filelist-file-data-title",filelistDataSize:"fuploader-filelist-file-data-size",filelistActions:"fuploader-filelist-file-actions",footer:"fuploader-footer",footerData:"fuploader-footer-data",footerButtons:"fuploader-footer-buttons",file:"fuploader-filelist-file",fileIcon:"fuploader-filelist-file-icon",fileIconImage:"fuploader-file-image",fileRemove:"fuploader-filelist-file-remove",fileProgress:"fuploader-filelist-file-progress",fileStatus:"fuploader-filelist-file-status"}};this.options=Object.assign(n,s),this.locale=e.lang[this.options.lang]||e.lang.en,this.el.classList.add(this.options.classes.container),this.el.style.width=Number.isInteger(this.options.width)?this.options.width+"px":this.options.width,this.el.style.height=Number.isInteger(this.options.height)?this.options.height+"px":this.options.height,this.renderDefaultLayout(),this.dropzone=this.el.querySelector("."+this.options.classes.dropzone),this.filelist=this.el.querySelector("."+this.options.classes.filelist),this.filelistItems=this.filelist.querySelector("."+this.options.classes.filelistItems),this.footer=this.el.querySelector("."+this.options.classes.footer),this.footerStat=this.footer.querySelector("."+this.options.classes.footerData),this.footerButtons=this.footer.querySelector("."+this.options.classes.footerButtons),this.input=this.el.querySelector('input[type="file"]'),this.addButton=t.primary("+"),this.cancelButton=t.secondary(this.locale.cancel),this.uploadButton=t.primary(this.locale.upload),this.reloadButton=t.primary(this.locale.uploadMore),this.reloadButton.classList.add("hidden"),this.footerButtons.append(this.addButton),this.footerButtons.append(this.cancelButton),this.footerButtons.append(this.uploadButton),this.footerButtons.append(this.reloadButton),this.files=[],this.uploadIndex=0,this.isUploading=!1,this.isDone=!1,this.xhr=null,this.initEvents()}var i,n,o;return i=e,n=[{key:"initEvents",value:function(){var e=this;this.el.addEventListener("dragenter",this.dragOver.bind(this),!1),this.el.addEventListener("dragover",this.dragOver.bind(this),!1),this.el.addEventListener("dragexit",this.dragLeave.bind(this),!1),this.el.addEventListener("dragleave",this.dragLeave.bind(this),!1),this.el.addEventListener("drop",this.dropped.bind(this),!1),this.input.addEventListener("change",this.processInputFiles.bind(this)),this.addButton.addEventListener("click",(function(t){return t.preventDefault(),e.input.click(),!1})),this.cancelButton.addEventListener("click",(function(t){return t.preventDefault(),e.cancel(),!1})),this.uploadButton.addEventListener("click",(function(t){return t.preventDefault(),e.uploadFiles(),!1})),this.reloadButton.addEventListener("click",(function(t){return t.preventDefault(),e.cancel(),!1})),this.filelistItems.addEventListener("click",(function(t){var i=e.options.classes.fileRemove,s=t.target;if(s.classList.contains(i)||s.closest("."+i)){t.preventDefault();var n=parseInt(s.closest("."+e.options.classes.file).dataset.index);return e.files.splice(n,1),e.renderFiles(),!1}}))}},{key:"renderDefaultLayout",value:function(){var e=[];e.push(this.tplFilelist()),e.push(this.dropzoneTpl()),this.el.innerHTML=e.join("")}},{key:"dragOver",value:function(e){e.stopPropagation(),e.preventDefault(),this.isUploading?e.dataTransfer.dropEffect="none":(this.el.classList.add(this.options.classes.dragOver),e.dataTransfer.dropEffect="copy")}},{key:"dragLeave",value:function(){this.el.classList.remove(this.options.classes.dragOver)}},{key:"dropped",value:function(e){e.stopPropagation(),e.preventDefault(),this.dragLeave(),this.isUploading||this.handleFiles(e.dataTransfer.files)}},{key:"processInputFiles",value:function(){this.handleFiles(this.input.files)}},{key:"handleFiles",value:function(e){var t=this;this.isDone&&this.cancel(),u(e).forEach((function(e){t.files.push(e)})),this.renderFiles()}},{key:"showFilelist",value:function(){this.dropzone.classList.add("hidden"),this.filelist.classList.remove("hidden")}},{key:"hideFileList",value:function(){this.dropzone.classList.remove("hidden"),this.filelist.classList.add("hidden")}},{key:"renderFiles",value:function(){var e=this,t=[];this.files.forEach((function(i,s){if(t.push(e.fileTpl(i,s)),i.type.match("image/*")){var n=new FileReader;n.readAsDataURL(i),n.onloadend=function(t){e.filelistItems.querySelectorAll("."+e.options.classes.file)[s].querySelector("."+e.options.classes.fileIconImage).style.backgroundImage="url("+t.target.result+")"}}})),this.files.length?(this.showFilelist(),this.filelistItems.innerHTML=t.join(""),this.footerStat.innerHTML=this.tplStat()):this.hideFileList()}},{key:"uploadFiles",value:function(){if(this.addButton.classList.add("hidden"),this.reloadButton.classList.add("hidden"),this.uploadButton.classList.add("hidden"),this.files.length){var e=this.files[this.uploadIndex];this.uploadFile(e,this.uploadIndex)}}},{key:"uploadFile",value:function(e,t){var i=this,n=this.filelistItems.querySelectorAll("."+this.options.classes.file)[t],a=n.querySelector("."+this.options.classes.fileProgress),o=n.querySelector("."+this.options.classes.fileRemove),l=n.querySelector("."+this.options.classes.fileStatus);o.classList.add("hidden"),a.classList.remove("hidden");var r=new FormData;r.append(this.options.name,e);var c=this.uploadIndex/this.files.length*100;this.footerStat.innerHTML=s.render(c),this.xhr=new XMLHttpRequest,this.xhr.onprogress=function(e){var t=e.loaded/e.total*100;a.innerHTML=s.render(t)},this.xhr.addEventListener("load",(function(){var e=parseInt(i.xhr.status);if(a.classList.add("hidden"),l.innerHTML=200===e?d.success(i.locale.uploaded):d.error(i.locale.error),i.uploadIndex++,i.uploadIndex+1>i.files.length)i.uploaded();else{var t=i.files[i.uploadIndex];i.uploadFile(t,i.uploadIndex)}})),this.xhr.open("POST",this.options.upload_url,!0),this.xhr.send(r)}},{key:"uploaded",value:function(){this.isUploading=!1,this.isDone=!0,this.footerStat.innerHTML=d.success(this.locale.allFilesUploaded),this.cancelButton.classList.add("hidden"),this.reloadButton.classList.remove("hidden")}},{key:"cancel",value:function(){this.files=[],this.isUploading=!1,this.isDone=!1,this.uploadIndex=0,this.xhr&&this.xhr.abort(),this.reloadButton.classList.add("hidden"),this.addButton.classList.remove("hidden"),this.cancelButton.classList.remove("hidden"),this.uploadButton.classList.remove("hidden"),this.renderFiles()}},{key:"dropzoneTpl",value:function(){return'\n            <label class="'.concat(this.options.classes.dropzone,'">\n                <div>\n                    <input type="file" multiple>\n                    <div class="').concat(this.options.classes.dropzoneLabel,'">').concat(this.locale.dragFilesHere,"</div>\n                    ").concat(t.primary(this.locale.orChooseFileFromComputer,"span").outerHTML,'\n                </div>\n            </label>\n            <div class="').concat(this.options.classes.dropzoneArea,' hidden">\n                <div>').concat(this.locale.dropFilesHere,"</div>\n            </div>\n        ")}},{key:"fileTpl",value:function(e){return'\n            <div class="'.concat(this.options.classes.file,'">\n                <div class="').concat(this.options.classes.fileIcon," ").concat(e.type.match("image.*")?this.options.classes.fileIconImage:"",'">\n                    ').concat(a.file(),'\n                </div>\n                <div class="').concat(this.options.classes.filelistData,'">\n                    <div class="').concat(this.options.classes.filelistDataTitle,'">').concat(e.name,'</div>\n                    <div class="').concat(this.options.classes.filelistDataSize,'">').concat(this.fileSize(e.size),'</div>\n                </div>\n                <div class="').concat(this.options.classes.filelistActions,'">\n                    <div class="').concat(this.options.classes.fileProgress,'"></div>\n                    <div class="').concat(this.options.classes.fileStatus,'"></div>\n                    <div class="').concat(this.options.classes.fileRemove,'">\n                        ').concat(a.trash(),"\n                    </div>\n                </div>\n            </div>\n        ")}},{key:"tplFilelist",value:function(){return'\n            <div class="'.concat(this.options.classes.filelist,' hidden">\n                <div class="').concat(this.options.classes.filelistItems,'"></div>\n                <div class="').concat(this.options.classes.footer,'">\n                    <div class="').concat(this.options.classes.footerData,'"></div>\n                    <div class="').concat(this.options.classes.footerButtons,'"></div>\n                </div>\n            </div>\n        ')}},{key:"tplStat",value:function(){return"\n            <div>".concat(this.locale.selectedFiles,": ").concat(this.files.length,"</div>\n            <div>").concat(this.locale.totalSize,": ").concat(this.fileSize(this.totalSize()),"</div>\n        ")}},{key:"totalSize",value:function(){var e,t;return e=this.files,t="size",e.reduce((function(e,i){return e+i[t]}),0)}},{key:"fileSize",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=1024;if(Math.abs(e)<i)return e+" B";var s=["kB","MB","GB","TB","PB","EB","ZB","YB"],n=-1,a=Math.pow(10,t);do{e/=i,++n}while(Math.round(Math.abs(e)*a)/a>=i&&n<s.length-1);return e.toFixed(t)+" "+s[n]}}],n&&p(i.prototype,n),o&&p(i,o),Object.defineProperty(i,"prototype",{writable:!1}),e}())?Object.defineProperty(l,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[r]=c})();