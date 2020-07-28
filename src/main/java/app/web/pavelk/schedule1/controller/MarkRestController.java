package app.web.pavelk.schedule1.controller;


import app.web.pavelk.schedule1.domain.Mark;
import app.web.pavelk.schedule1.repo.MarkRepo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/mark")
public class MarkRestController extends AbstractRestController<Mark, MarkRepo> {
    public MarkRestController(MarkRepo repo) {
        super(repo);
    }
}
