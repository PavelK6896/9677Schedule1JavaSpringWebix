package app.web.pavelk.schedule1.domain;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Car implements ComboListItem{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @ManyToOne
    @JsonIdentityReference //(alwaysAsId = true) // только ид
    @JsonSerialize(as=ComboListItem.class) // джексон развернет и модель
    private Model model;
}
