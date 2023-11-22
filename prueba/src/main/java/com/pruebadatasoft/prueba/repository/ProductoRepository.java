package com.pruebadatasoft.prueba.repository;

import com.pruebadatasoft.prueba.models.Categoria;
import com.pruebadatasoft.prueba.models.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    @Query("SELECT p from Producto p INNER JOIN p.categoria c WHERE c.cat_id=:id")
    List<Producto> getProducts(Long id);
}

