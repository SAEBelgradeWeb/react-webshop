import { BsFillCartFill as CartIcon } from "react-icons/bs"
import { Link } from "react-router-dom";
import "./Navigation.css"

const Navigation = ({numOfItemsInCart}) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li className="numOfItemsContainer">
          <Link to="/cart">
            <CartIcon />
            {numOfItemsInCart > 0 ? <div className="numOfItemsBtn">{numOfItemsInCart}</div> : null }
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation