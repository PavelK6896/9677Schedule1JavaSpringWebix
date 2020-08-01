define(function() { // кастомный прокси
    var ajax = webix.ajax().headers({ // загрузка
        'Content-type': 'application/json'
    })

    webix.proxy.resource = {
        init: function() {
            webix.extend(this, webix.proxy.rest)
        },
        load: function(view, params) {
            var url = view.config.url.source

            return ajax.get(url).then(function(value) {
                return value.json().content // то что загрузил
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
