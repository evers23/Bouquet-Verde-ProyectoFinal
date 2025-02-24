//Consumiendo una API REST.
import { createContext, useState} from "react";
import {
  getAllProductsRequest,
  deleteProductRequest,
  createProductRequest,
  getProductRequest,
  updateProductRequest,
} from "../api/products.api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState([]);

  const loadProducts = async () => {
    const res = await getAllProductsRequest();
    setProducts(res.data); // Aquí se consume la API y se actualiza el estado
  };

  const loadProduct = async (id) => {
    const res = await getProductRequest(id);
    return res.data; // Aquí se consume la API para obtener un producto específico
  };

  const createProduct = async (product) => {
    try {
      const res = await createProductRequest(product);
      setProducts([...products, res.data]); // Aquí se consume la API para crear un producto
      return res.data;
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      }
    }
  };

  const deleteProduct = async (id) => {
    const res = await deleteProductRequest(id);
    if (res.status === 204) {
      setProducts(products.filter((product) => product.id != id)); // Aquí se consume la API para eliminar un producto
    }
  };

  const updateProduct = async (id, product) => {
    try {
      const res = await updateProductRequest(id, product);
      return res.data; // Aquí se consume la API para actualizar un producto
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      }
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loadProducts,
        loadProduct,
        deleteProduct,
        createProduct,
        errors,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};


