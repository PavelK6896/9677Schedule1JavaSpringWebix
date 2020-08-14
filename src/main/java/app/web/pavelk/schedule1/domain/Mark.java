package app.web.pavelk.schedule1.domain;

import app.web.pavelk.schedule1.util.EntityIdResolver;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) // лениво сериализатор что то
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        scope = Mark.class,
        resolver = EntityIdResolver.class, // принемаем строку и преводим к лонгу
        property = "id"
)
public class Mark implements ComboListItem{
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE) //generator = "table-generator" )
    // ,fetch = FetchType.LAZY)  // отдельная таблица для ключа?? // пытаеться сериализовать
    @Column(name = "id")
//    @TableGenerator(name = "table-generator",
//            table = "dep__ids",
//            pkColumnName = "seq__id",
//            valueColumnName = "seq__value")
    private Long id;

    private String name;
}
