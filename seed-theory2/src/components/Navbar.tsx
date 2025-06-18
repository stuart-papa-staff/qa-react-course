import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav>
        <h2>
            Seed theory
        </h2>
        <div>
            <Link to="/">Home | </Link>
            <Link to="/items">Shop | </Link>
            <Link to="/checkout">Checkout |</Link> 
        </div>
        <hr />
    </nav>
    )
}
          
export default Navbar