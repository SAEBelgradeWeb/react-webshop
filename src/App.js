import './App.css';

import { useState, useEffect } from "react";

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Navigation from "./components/Navigation"

// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const productsInit = [
  {
    id:0,
    name:"Laptop",
    image:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    price:2000,
    category:"electronics",
    description:"This is a laptop."
  },
  {
    id:1,
    name:"White T-shirt",
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    price:15,
    category:"clothing",
    description:"This is a white T-shirt."
  },
  {
    id:2,
    name:"Black Car",
    image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price:15,
    category:"automobile",
    description:"This is a black car."
  },
]

function App() {
  const [products] = useState(productsInit)

  const [cart, setCart] = useState([])

  useEffect(()=>{
    console.log(cart)
  },[cart])

  function addToCart(id){
    console.log('ADD TO CART',id)
    const newProduct = products.filter(product => product.id == id)
    setCart([...cart,newProduct])
  }

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<h1>404 - not found.</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
