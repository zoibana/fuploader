FUPloader is a JavaScript library that get rid of typical problems of the standard file upload fields and forms.
Yeah, you can use it as regular file field — click in it and choose files from computer.
But also you can just drag and drop your files onto the file field! Or JUST COPY IMAGE AND PASTE IT to the file field! 
FUPloader will display the list of selected files with previews. You can sort files to set order you need, delete files or add new files to list. 
Then just click UPLOAD button and watch to upload progress of each file in list - one by one. Never before file uploading was so easy and handy!

FUPloader is fully customizable and configurable and can be styled according to your needs.

![FUPloader screenshot](https://github.com/zoibana/fuploader/blob/master/source/img/init.png?raw=true)

![FUPloader screenshot](https://github.com/zoibana/fuploader/blob/master/source/img/preview.png?raw=true)

![FUPloader uploading screenshot](https://github.com/zoibana/fuploader/blob/master/source/img/uploading.png?raw=true)

## Quickstart

Install:

```bash
$ npm install --save @zoibana/fuploader
```

Use as **ES6 module** (recommended):

```js
import Fuploader from "@zoibana/fuploader/Fuploader";

// Base usage
new Fuploader('div#fuploader', {
    upload_url: "/fileupload/",
    name: "file"
});

// With options
new Fuploader(element, {
    upload_url: "/fileupload/", 
    name: "file", // file field name
    lang: "en", // language
    width: 800, // default: 100%
    height: 500, // default: 500px
    sortable: true, // Allow to sort list of selected files. Default false
    paste: true, // Allow to PASTE image files from clipborad
    dragdrop: true, // Allow to select files via drag and drop
    maxFiles: 20, // Max files limit
    maxFileSize: 2, // Max file size in megabytes. If zero — no check. Default: 0
    parallel: true, // Allow parallel files uploading. If false files will upload one by one
    acceptedFileTypes: ['*'], // allowed file mime-types. Etc: ["image.*","text.*"]. If value is empty or equals "*" - no checks
    formData: { // Additional formdata to send with each file. Could be a closure that returns object
      _csrf: "...."
    }
});

// Let's add new locale
Fuploader.lang.ru = {
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
};

// And use it
new Fuploader(element, {
    upload_url: "/fileupload/",
    lang: "ru", // language
});
```

SCSS
```scss
@import '@zoibana/fuploader/dist/css/fuploader.css';
```

## Not using a package manager or bundler?

Use the standalone files like this:

```html
<script src="https://unpkg.com/@zoibana/fuploader@0.0.13/dist/js/Fuploader.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@zoibana/fuploader@0.0.7/dist/css/fuploader.css" type="text/css"/>

<div id="fuploader"></div>

<script>
  new Fuploader('#fuploader', { upload_url: "/fileupload/" });
</script>
```

## 🔥 Main features

- Lightweight: 61 kb JS + 4 kb CSS 
- Image thumbnail previews
- Multiple files and one by one or synchronous uploads
- Progress updates
- Sortable list of selected files
- Customizable by css