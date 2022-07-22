import "./Product.css"

import { BsFillCartPlusFill as AddToCartBtn, BsFillCartXFill as RemoveFromCartBtn } from 'react-icons/bs';

const Product = ({data, addToCart}) => {
  return (
    <div className="product_card">
      <h4>{data.name}</h4>
      <span>{data.category}</span>
      <img src={data.image} />

      
      


      <div className="price_buttons">
        <span>{data.price} &#36;</span>
        <div>
          
          <button onClick={()=>{
            addToCart(data.id)
          }}>
            <AddToCartBtn style={{color:'green',fontSize:'35px'}} />
          </button>

{/*           <button>
            <RemoveFromCartBtn style={{color:'red',fontSize:'35px'}} />
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Product