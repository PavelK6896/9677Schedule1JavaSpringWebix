define(function() {
    return {
        rows: [
            {
                view: 'toolbar', // для добавления
                cols: [
                    {
                        view: 'button',
                        label: 'Add', //надпись
                        click: function() { // действие
                            var markList = $$('markList') // ищем идентификатор
                            var id = markList.add({})
                            markList.editRow(id) // фокус на редактирование
                        }
                    }
                ]
            },
            {
                id: 'markList', // идентификатор
                view: "datatable",
                columns: [
                    {id: 'id'},
                    { id: "name", editor: "text" } // редактор техт
                ],
                url: 'resource->/api/mark', // кастомный прокси
                save: 'resource->/api/mark', // для обратного зароса на апи
                autoheight: true, // размер авто
                autowidth: true,
                editable: true // редактировать вебХ
            }
        ]
    }
})
