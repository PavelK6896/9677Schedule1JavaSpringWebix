package app.web.pavelk.schedule1.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;


//T тип для контролера по сущьности созданной
//R репозиторий для этой же сущьности
public abstract class AbstractRestController<T, R extends JpaRepository<T, ?>> {
    protected R repo;

    //инжектим репозитой в клас
    public AbstractRestController(R repo) {
        this.repo = repo;
    }

    @GetMapping//1 все сущьности //формируем страницу поумолчанию
    public Page<T> list(@PageableDefault Pageable pageable) {
        return repo.findAll(pageable);
    }

    @GetMapping("{id}")//2 // спринг сам должен вытищить из базы объект T
    public T getOne(@PathVariable("id") T obj) {
        return obj;
    }

    @PostMapping//3 добавление //получаем данные в теле собирает объект Т //присваиваеться идентификатор
    public T add(@RequestBody T obj) {
        return repo.save(obj);
    }

    @PutMapping("{id}")//4 изменение -1 спринг должен привезти из бд Т обдж, -2 спринг должен собрать объект Т и присвоить ид
    public T update(@PathVariable("id") T dbObj, @RequestBody T obj) {
        BeanUtils.copyProperties(obj, dbObj, "id");//копирует проперти из одного в другй
        return repo.save(dbObj);
    }

    @DeleteMapping("{id}")//5
    public void delete(@PathVariable("id") T dbObj) {
        repo.delete(dbObj);
    }
}
