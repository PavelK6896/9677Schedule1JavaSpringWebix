package app.web.pavelk.schedule1.controller;


import app.web.pavelk.schedule1.domain.Car;
import app.web.pavelk.schedule1.repo.CarRepo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/car")
public class CarController extends AbstractRestController<Car, CarRepo> {
    public CarController(CarRepo repo) {
        super(repo);
    }
}
