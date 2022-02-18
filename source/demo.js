import Fuploader from "../Fuploader";

new Fuploader(document.querySelector('#uploader'), {
    // formData: {
    //     _csrf: 'testCsrf',
    //     testAttr: 'testValue',
    //     testForm: {
    //         values: [1,2],
    //         test: ';'
    //     }
    // },
    formData: function(){
        return {
            test: 1,
            testForm: {
                field: (new Date()).getDate()
            }
        }
    }
});
