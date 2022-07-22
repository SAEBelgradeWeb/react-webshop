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

  // add to cart function
  function addToCart(id){
    const isItemInCart = cart.find(product => product.id == id)
    if(isItemInCart === undefined){
      const newProduct = products.find(product => product.id == id)
      newProduct.quantity = 1;

      setCart([...cart,newProduct])
    } else {
      const newCart = cart.map(product => {
        if(product.id == id) {
          product.quantity = product.quantity + 1;
          return product
        } else {
          return product;
        }
      })

      setCart(newCart)
    }
  }


  // remove from cart function
  function removeFromCart(id){
    console.log('remove from cart',id)
    const product = cart.find(product => product.id === id)
    
    var newCart;

    // quantity higher than 1, simply deduct 1 from quantity
    if(product.quantity > 1){
      newCart = cart.map(product => {
        if(product.id === id){
          product.quantity = product.quantity - 1;
          return product;
        } else {
          return product;
        }
      })
    } else {
      // or quantity = 1 , remove object from cart
      newCart = cart.filter(product => product.id !== id)
    }

    setCart(newCart)
  }

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="*" element={<h1>404 - not found.</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
