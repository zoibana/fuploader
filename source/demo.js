import Fuploader from "../Fuploader";

new Fuploader(document.querySelector('#uploader'), {
    maxFiles: 5,
    sortable: false,
    dragDrop: true,
    paste: false,
    formData: function () {
        return {
            test: 1,
            testForm: {
                field: (new Date()).getDate()
            }
        }
    }
});
