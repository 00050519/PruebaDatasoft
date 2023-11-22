package com.pruebadatasoft.prueba.repository;

import com.pruebadatasoft.prueba.models.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoriasRepository extends JpaRepository<Categoria, Long> {

}
