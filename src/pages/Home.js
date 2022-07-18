import Product from "../components/Product"

import "./Home.css"

const Home = ({products, addToCart}) => {
  return (
    <div>
      <h3>Products</h3>
      <div className="products">
        {products.map(productObj => <Product key={productObj.id} data={productObj} addToCart={addToCart} />)}
      </div>
    </div>
  )
}

export default Home