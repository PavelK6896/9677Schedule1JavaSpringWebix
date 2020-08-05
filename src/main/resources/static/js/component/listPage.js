define(function () {
    return function (tableId, url, columns) {
        return {
            rows: [
                {
                    view: 'toolbar', // для добавления
                    cols: [
                        {
                            view: 'button',
                            label: 'Add', //надпись
                            click: function () { // действие
                                var markList = $$(tableId) // ищем идентификатор
                                var id = markList.add({})
                                markList.editRow(id) // фокус на редактирование
                            }
                        }
                    ]
                },
                {
                    id: tableId, // идентификатор
                    view: "datatable",
                    columns: columns, // для таблице

                    //     [
                    //     {id: 'id'},
                    //     {id: "name", editor: "text"} // редактор техт
                    // ],
                    url: url,//'resource->/api/mark', // кастомный прокси
                    save: url, //'resource->/api/mark', // для обратного зароса на апи
                    autoheight: true, // размер авто
                    autowidth: true,
                    editable: true, // редактировать вебХ
                    pager: 'markPager', // регистрация пагера
                    datafetch: 3, // грузить по 3 с сервера

                },
                {
                    view: "pager",
                    id: "markPager", // название пагера
                    size: 3, // число
                    group: 3, // число кнопок стриниц
                    // конфигурайия погинации
                    template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}",

                }
            ]
        }
    }

})
