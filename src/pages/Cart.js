import CartProduct from "../components/CartProduct"
import TotalPrice from "../components/TotalPrice"

const Cart = ({cart,addToCart,removeFromCart}) => {
  return (
    <div>
      {cart.map(product => <CartProduct key={product.id} data={product} addToCart={addToCart} removeFromCart={removeFromCart} />)}
      {cart.length > 0 ? <TotalPrice cart={cart} /> : <h2 style={{textAlign:'center'}}>No items in the cart</h2>}

      
    </div>
  )
}

export default Cart