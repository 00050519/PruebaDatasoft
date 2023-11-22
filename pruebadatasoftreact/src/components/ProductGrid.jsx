// ProductGrid.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const ProductGrid = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/prueba/getcategorias")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    // Fetch products based on the selected category
    if (selectedCategory) {
      axios
        .get(`http://localhost:8080/prueba/getByCategory/${selectedCategory}`)
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        })
        .catch((error) => console.error("Error fetching products:", error));
    } else if (selectedCategory === 0) {
      axios
        .get(`http://localhost:8080/prueba/getproductos`)
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [selectedCategory]);

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="category" className="text-lg font-semibold">
          Productos Seleccionados:
        </label>
        <select
          id="category"
          className="ml-2 p-2 border border-gray-300 rounded transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="0" defaultValue>
            Todos los productos
          </option>
          {categories.map((category) => (
            <option key={category.cat_id} value={category.cat_id}>
              {category.cat_nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        {products.map((product) => (
          <Card
            key={product.prd_id}
            name={product.prd_imagen}
            image={product.prd_nombre}
            description={product.prd_descripcion}
            price={product.prd_precio}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
