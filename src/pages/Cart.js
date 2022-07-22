import CartProduct from "../components/CartProduct"

const Cart = ({cart,addToCart,removeFromCart}) => {
  return (
    <div>
      {cart.map(product => <CartProduct key={product.id} data={product} addToCart={addToCart} removeFromCart={removeFromCart} />)}
    </div>
  )
}

export default Cart