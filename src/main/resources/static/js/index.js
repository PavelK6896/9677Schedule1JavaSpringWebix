requirejs.config({//конфиг
    baseUrl: 'js'
})


function buildRoute(view) {//для роута
    return function() {
        webix.ui({//делаем новый контейнер
            id: 'root',
            rows: [
                view //сам модуль
            ]

        }, $$("root"))
    }
}

//промписываем импортированные скрипты // передаем в функцию
// import cars from 'views/cars' // упрощено до
require(['views/main', 'views/cars'], function(main, cars) {//отрисовка главное приложение
    webix.ready(function() { // готов - ready
        webix.ui({//контейнер
            id: 'root',//сет ид
            container: "app"//наме для хтмл
        })
    })

    routie({//дополнительный код для роутера
        '': buildRoute(main),//просто мапиннг
        'cars': buildRoute(cars)
    })
})
