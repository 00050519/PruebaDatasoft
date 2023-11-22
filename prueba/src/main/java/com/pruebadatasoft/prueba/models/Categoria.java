package com.pruebadatasoft.prueba.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cat_id;

    private String cat_nombre;

    // Constructors, getters, and setters

    public Categoria() {
        // Default constructor
    }

    public Categoria(String cat_nombre) {
        this.cat_nombre = cat_nombre;
    }

    // Getter and Setter methods

    public Long getCat_id() {
        return cat_id;
    }

    public void setCat_id(Long cat_id) {
        this.cat_id = cat_id;
    }

    public String getCat_nombre() {
        return cat_nombre;
    }

    public void setCat_nombre(String cat_nombre) {
        this.cat_nombre = cat_nombre;
    }
}
