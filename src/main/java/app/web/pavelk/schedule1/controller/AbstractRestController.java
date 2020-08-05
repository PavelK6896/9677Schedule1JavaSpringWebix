package app.web.pavelk.schedule1.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

//swagger-ui.html
//T тип для контролера по сущьности созданной
//R репозиторий для этой же сущьности
@CrossOrigin("*")
@Api("CRUD")
public abstract class AbstractRestController<T, R extends JpaRepository<T, Long>> {
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
    public T getOne(@PathVariable(value = "id") Long id) {
        return repo.getOne(id);
    }

    //4 изменение -1 спринг должен привезти из бд Т обдж, -2 спринг должен собрать объект Т и присвоить ид
    @PutMapping("{id}")
    public T update(@PathVariable(value = "id") Long id, @RequestBody T obj) {
        T one = repo.getOne(id);
        System.out.println("PutMapping" + obj);
        BeanUtils.copyProperties(obj, one, "id");//копирует проперти из одного в другй
        return repo.save(one);
    }

    @PostMapping//3 добавление //получаем данные в теле собирает объект Т //присваиваеться идентификатор
    public T add(@RequestBody T obj){

        System.out.println(obj + " PostMapping");

        T r = repo.save(obj);


        System.out.println(r + " 222222222222");

        return r;
    }

    @DeleteMapping("{id}")//5
    @ApiOperation("Remove")
    public void delete(@PathVariable(value = "id") Long id) {
        repo.deleteById(id);
    }
}
