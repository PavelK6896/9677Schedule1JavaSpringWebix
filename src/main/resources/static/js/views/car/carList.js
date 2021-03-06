define(['component/listPage'], function(listPage) {
    return listPage(
        'carList',
        'resource->/api/car',
        [
            { id: "name", editor: "text" },
            {
                id: 'model',
                dialogUrl: 'views/model/modelDialog',
                template: function(row) { //'#model.name#'
                    return row.model && row.model.repr || '' // просто иф для строки
                }
            }

        ]
    )
})


// define(function() {
//     return {
//         rows: [
//             {//кнопка для нав
//                 view: 'button',
//                 label: 'Main',
//                 click: function() {//навигация
//                     routie('')
//                 }
//             },
//             {//контент
//                 view: 'list',
//                 data: [
//                     'audi q7',
//                     'bmw x7',
//                     'uaz patriot'
//                 ]
//             }
//         ]
//     }
// })


