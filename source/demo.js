import Fuploader from "../Fuploader";

new Fuploader(document.querySelector('#uploader'), {
    formData: {
        _csrf: 'testCsrf',
        testAttr: 'testValue'
    }
});
