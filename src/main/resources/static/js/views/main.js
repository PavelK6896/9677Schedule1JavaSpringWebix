define(function() {//новый модуль
    return {//возвращает модуль
        type: "line",
        height: 400,//высота всего модуля
        rows: [
            {//кнопка для нав
                view: 'button',
                label: 'Cars',
                click: function() {//навигация
                    routie('cars')
                }
            },
            { template: "Row 1" },//строка 2
            { template: "Row 2" },
            {//строка 4
                cols: [//колонки
                    { template: "col 1" },//колонка 1
                    { template: "col 2" }
                ]
            }
        ]
    }
})
