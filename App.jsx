import React, { useState } from "react";
import "./App.css";

const initialProducts = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, image: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg" },
  { id: 2, name: "T-Shirt", category: "Clothing", price: 25, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "The Great Gatsby", category: "Books", price: 15, image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80" },
  { id: 4, name: "Smartphone", category: "Electronics", price: 800, image: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg" },
  { id: 5, name: "Jeans", category: "Clothing", price: 50, image: "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Sapiens", category: "Books", price: 20, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80" }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = ["All", "Electronics", "Books", "Clothing"];

  const filteredProducts = selectedCategory === "All"
    ? initialProducts
    : initialProducts.filter((p) => p.category === selectedCategory);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="app-container">
      <h1>🛍️ Dynamic Product Filter & Cart</h1>
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="content">
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="img" />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>🛒 Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>${item.price} × {item.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
              <h3>Total: ${totalPrice}</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
