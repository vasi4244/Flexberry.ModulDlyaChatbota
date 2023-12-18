package Modul_dlya_chatbota.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_dlya_chatbota.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Опрос
 */
@Entity(name = "IISModul_dlya_chatbotaОпрос")
@Table(schema = "public", name = "Опрос")
public class Opros {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодОпр")
    private Integer кодопр;

    @Column(name = "Название")
    private String название;


    public Opros() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодОпр() {
      return кодопр;
    }

    public void setКодОпр(Integer кодопр) {
      this.кодопр = кодопр;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }


}