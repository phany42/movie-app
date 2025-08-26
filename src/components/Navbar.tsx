import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h2>Movie App</h2>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};

export default Navbar;