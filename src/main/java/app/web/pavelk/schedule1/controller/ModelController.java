package app.web.pavelk.schedule1.controller;


import app.web.pavelk.schedule1.domain.Model;
import app.web.pavelk.schedule1.repo.ModelRepo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/model")
public class ModelController extends AbstractRestController<Model, ModelRepo> {
    public ModelController(ModelRepo repo) {
        super(repo);
    }
}
