package com.pruebadatasoft.prueba.control;

import com.pruebadatasoft.prueba.models.Categoria;
import com.pruebadatasoft.prueba.models.Producto;
import com.pruebadatasoft.prueba.repository.CategoriasRepository;
import com.pruebadatasoft.prueba.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/prueba")
public class PruebaController {

    @Autowired
    CategoriasRepository categoriasRepository;

    @Autowired
    ProductoRepository productoRepository;

    @GetMapping("/getcategorias")
    public List<Categoria> listCategorias() {return categoriasRepository.findAll();}

    @GetMapping("/getproductos")
    public List<Producto> listProductos() {return productoRepository.findAll();}

    @GetMapping("/getproducto/{id}")
    public Optional<Producto> listProducto(@PathVariable Long id) {return productoRepository.findById(id);}

    @GetMapping("/getByCategory/{id}")
    public List<Producto> listProductosByCategory(@PathVariable Long id) {return productoRepository.getProducts(id);}
}
