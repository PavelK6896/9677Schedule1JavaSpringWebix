package app.web.pavelk.schedule1.repo;


import app.web.pavelk.schedule1.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car, Long> {
}
