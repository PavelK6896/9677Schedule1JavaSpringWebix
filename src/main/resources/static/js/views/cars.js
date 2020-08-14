define(['component/listPage', 'collections/models'], function(listPage, models) {

    console.log(models)
    return listPage(
        'carList',
        'resource->/api/car',
        [
            { id: "name", editor: "text" },
            {id: 'mark', editor: "combo", options: models}

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


