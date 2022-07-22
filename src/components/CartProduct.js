import "./CartProduct.css"
import { BsFillCartPlusFill as AddToCartBtn, BsFillCartXFill as RemoveFromCart } from 'react-icons/bs';

const CartProduct = ({data, addToCart,removeFromCart}) => {
  return (
    <div className="cart_product">
      <h4>{data.name}</h4>
      <p>{data.price} &#36;</p>
      <p>Quantity: {data.quantity}</p>

      <div>
        {/* add to cart btn */}
        <button onClick={()=> {
          addToCart(data.id)
        }}>
          <AddToCartBtn style={{color:"green",fontSize:'35px'}} />
        </button>

          {/* remove from cart btn */}
        <button onClick={()=>{
          removeFromCart(data.id)
        }}>
          <RemoveFromCart style={{color:"red",fontSize:'35px'}} />
        </button>
      </div>
    </div>
  )
}

export default CartProduct