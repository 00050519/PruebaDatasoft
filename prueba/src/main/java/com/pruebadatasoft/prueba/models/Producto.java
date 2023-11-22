package com.pruebadatasoft.prueba.models;
import javax.persistence.*;

@Entity
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prd_id;

    private String prd_nombre;

    @Column(length = 200)
    private String prd_descripcion;

    @Column(precision = 6, scale = 2)
    private Double prd_precio;

    @Column(length = 200)
    private String prd_imagen;

    @Column(length = 3)
    private String prd_estado;

    @ManyToOne
    @JoinColumn(name = "cat_id")
    private Categoria categoria;

    // Constructors, getters, and setters

    public Producto() {
        // Default constructor
    }

    public Producto(String prd_nombre, String prd_descripcion, Double prd_precio, String prd_imagen, String prd_estado, Categoria categoria) {
        this.prd_nombre = prd_nombre;
        this.prd_descripcion = prd_descripcion;
        this.prd_precio = prd_precio;
        this.prd_imagen = prd_imagen;
        this.prd_estado = prd_estado;
        this.categoria = categoria;
    }

    public Long getPrd_id() {
        return prd_id;
    }

    public void setPrd_id(Long prd_id) {
        this.prd_id = prd_id;
    }

    public String getPrd_nombre() {
        return prd_nombre;
    }

    public void setPrd_nombre(String prd_nombre) {
        this.prd_nombre = prd_nombre;
    }

    public String getPrd_descripcion() {
        return prd_descripcion;
    }

    public void setPrd_descripcion(String prd_descripcion) {
        this.prd_descripcion = prd_descripcion;
    }

    public Double getPrd_precio() {
        return prd_precio;
    }

    public void setPrd_precio(Double prd_precio) {
        this.prd_precio = prd_precio;
    }

    public String getPrd_imagen() {
        return prd_imagen;
    }

    public void setPrd_imagen(String prd_imagen) {
        this.prd_imagen = prd_imagen;
    }

    public String getPrd_estado() {
        return prd_estado;
    }

    public void setPrd_estado(String prd_estado) {
        this.prd_estado = prd_estado;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
