import "./Product.css"

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
          }}>Add</button>

          <button>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default Product