define(function() { // кастомный прокси
    var ajax = webix.ajax().headers({ // загрузка
        'Content-type': 'application/json'
    })

    webix.proxy.resource = {
        init: function() {
            webix.extend(this, webix.proxy.rest)
        },
        load: function(view, params) {

            var args = ''

            // конфигурируем урл
            console.log("params" , params)
            args += '?page=' + (params ? params.start / view.config.datafetch : 0) // если парам

            console.log("args", args)
            args += '&size=' + view.config.datafetch

            var url = view.config.url.source

            return ajax.get(url + args).then(function(value) {
                 //value.json().content // то что загрузил
                var response = value.json()
                return {
                    data: response.content,
                    pos: response.number * view.config.datafetch, // number - текущая // datafetch - число элементов
                    total_count: response.totalElements // это количество записей с сервера
                }
            })
        },
        save: function(view, params) { // запрос на урл
            var id = params.id //на объект
            var url = view.config.url.source // урл из таблици
            if (params.operation === 'update') {//обнавление
                console.log("update id", id , "/", params.data)
                return ajax.put(url + '/' + id, params.data)
            } else if (params.operation === 'insert') {
                delete params.data.id // что бы хебернейт сгенерил свой
                console.log("insert ", params.data)
                return ajax.post(url, params.data)
            } else if (params.operation === 'delete') {
                return ajax.del(url + '/' + id)
            }
        }
    }
})
