import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.products;
    case "ADD_PRODUCT":
      return [...state, action.product];
    case "EDIT_PRODUCT":
      return state.map(product => (product._id === action.product._id ? action.product : product));
    case "DELETE_PRODUCT":
      return state.filter(product => product._id !== action.id);
    default:
      return state;
  }
}

const Todo = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productId, setProductId] = useState("");
  const [products, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://p-9x7e.onrender.com/products/products");
      dispatch({ type: "SET_PRODUCTS", products: res.data.data });
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  }

  const handleAdd = async () => {
    try {
      const res = await axios.post("https://p-9x7e.onrender.com/products/add-product", {
        pName: productName,
        pPrice: productPrice
      });
      dispatch({ type: "ADD_PRODUCT", product: res.data });
      setProductName("");
      setProductPrice("");
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  }

  const handleEdit = async () => {
    try {
      if (!productId) {
        console.error("Please provide a product ID for editing.");
        return;
      }

      // Prompt confirmation dialog
      const confirmEdit = window.confirm("Are you sure you want to edit this product?");
      if (!confirmEdit) return;

      const res = await axios.put(`https://p-9x7e.onrender.com/products/edit-product/${productId}`, {
        pName: productName,
        pPrice: productPrice
      });
      dispatch({ type: "EDIT_PRODUCT", product: res.data });
      setProductId("");
      setProductName("");
      setProductPrice("");
    } catch (error) {
      console.error("Error editing product:", error.message);
    }
  }

  const handleDelete = async () => {
    try {
      if (!productId) {
        console.error("Please provide a product ID for deletion.");
        return;
      }
  
      // Prompt confirmation dialog
      const confirmDelete = window.confirm("Are you sure you want to delete this product?");
      if (!confirmDelete) return;
  
      await axios.delete(`https://p-9x7e.onrender.com/products/delete-product/${productId}`);
      dispatch({ type: "DELETE_PRODUCT", id: productId });
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  }
  
  return (
    <div>
      <h1>Product Management</h1>
      <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="Product ID" />
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" />
      <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder="Product Price" />
      
      <button onClick={handleAdd}>Add Product</button>
      <button onClick={handleEdit}>Edit Product</button>
      <button onClick={handleDelete}>Delete Product</button>
      
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.pName} - {product.pPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
