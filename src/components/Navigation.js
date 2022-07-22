import { BsFillCartFill as CartIcon } from "react-icons/bs"
import { Link } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation