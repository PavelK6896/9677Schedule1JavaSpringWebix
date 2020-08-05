package app.web.pavelk.schedule1.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) // лениво сериализатор что то
public class Mark {
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
