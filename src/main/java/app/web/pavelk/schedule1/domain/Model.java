package app.web.pavelk.schedule1.domain;


import app.web.pavelk.schedule1.util.EntityIdResolver;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        scope = Model.class,
        resolver = EntityIdResolver.class,
        property = "id"
)
public class Model implements ComboListItem{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true) // только как ид но можно и натроить
    private Mark mark; // ресолвер найдет по строке это поле

    @Override
    @JsonIgnore // в ComboListItem он будет в машинках ManyToOne !
    public String getRepr() {//потанциальные проблемы //линивая подгрузка
        return String.format("%s %s",mark.getName(), name);
    }
}
