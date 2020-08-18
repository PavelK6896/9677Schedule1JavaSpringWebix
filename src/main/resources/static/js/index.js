requirejs.config({//конфиг
    baseUrl: 'js'
})


function buildRoute(view) {//для роута
    return function () {
        webix.ui({//делаем новый контейнер
            id: 'root',
            rows: [
                view //сам модуль
            ]

        }, $$("root"))
    }
}

function buildButton(label, route) {
    return {
        view: 'button',
        value: label,
        width: 100,
        align: 'center',
        click: function () {
            routie(route) // передает в роутер
        }
    }
}

//промписываем импортированные скрипты // передаем в функцию
// import cars from 'views/cars' // упрощено до
require(
    [
        'views/main',
        'views/car/carList',
        'views/mark/markList',
        'views/model/modelList',
        'util/resourceProxy',
    ],

    function (main, cars, marks, models, resourceProxy) {//отрисовка главное приложение
        webix.ready(function () { // готов - ready
            webix.ui({//контейнер
                container: "app",//наме для хтмл
                width: document.body.clientWidth, // чтобы контейнер развернулся
                height: document.body.clientHeight,
                rows:
                    [
                        {
                            view: 'toolbar',
                            cols: [
                                buildButton('Home', ''),
                                buildButton('Marks', 'marks'),
                                buildButton('Model', 'models'),
                                buildButton('Cars', 'cars'),
                            ]
                        },
                        {
                            id: 'root'

                        }//сет ид
                    ]
            })
        })

        routie({//дополнительный код для роутера
            '': buildRoute(main),//просто мапиннг
            'cars': buildRoute(cars),
            'models': buildRoute(models),
            'marks': buildRoute(marks),
        })
    })
