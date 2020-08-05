define(['component/listPage'], function(listPage) {
    return listPage(
        'carList',
        'resource->/api/car',
        [
            { id: "name", editor: "text" }
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


