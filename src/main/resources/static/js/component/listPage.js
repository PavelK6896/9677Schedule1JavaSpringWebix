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
                    pager: tableId +'markPager', // регистрация пагера
                    datafetch: 10, // грузить по 3 с сервера
                    on: {
                        onItemClick: function(id) {
                            var column = this.config.columns.find(function(col) { // ищем колонку
                                return col.id === id.column
                            })
                            var parentTable = this

                            if (column.dialogUrl) { // для не машин
                                require([column.dialogUrl], function(dialogPage) {
                                    webix.ui({
                                        view: 'window',
                                        head: 'Choose an item',
                                        width: 400,
                                        position: 'center',
                                        modal: true,
                                        body: dialogPage,
                                        parentTable: parentTable,
                                        cell: id,
                                    }).show()
                                })
                            }
                        }
                    },


                },
                {
                    view: "pager",
                    id: tableId + "markPager", // название пагера
                    size: 10, // число
                    group: 10, // число кнопок стриниц
                    // конфигурайия погинации
                    template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}",

                }
            ]
        }
    }

})
