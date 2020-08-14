package app.web.pavelk.schedule1.repo;


import app.web.pavelk.schedule1.domain.Model;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ModelRepo extends JpaRepository<Model, Long> {
}
