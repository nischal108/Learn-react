import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import { useContext } from "react";
import UserContext from "../../utils/loggedUserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  const cart = useSelector((store)=>store.cart.items);

  const toggleLogin = () => {
    if (user.isLoggedIn) {
      setUser({ username: "guest", isLoggedIn: false });
    } else {
      setUser({ username: "John Doe", isLoggedIn: true });
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={LOGO_URL} alt="Logo" className="h-16 w-16 object-cover" />
      </div>
      <nav className="flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-gray-900">
          About
        </Link>
        <Link to="/popular" className="text-gray-700 hover:text-gray-900">
          Popular
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900">
          Contact
        </Link> 
        <Link to="/cart" className="text-gray-700 hover:text-gray-900 flex items-center">
          🛒 Cart
          {cart.length > 0 && (
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {cart.length}
            </span>
          )}
          </Link>

      </nav>
      <div className="flex items-center space-x-4">
        <button
          className={`py-2 px-4 rounded text-white ${user.isLoggedIn ? "bg-red-500" : "bg-green-500"}`}
          onClick={toggleLogin}
          aria-label={user.isLoggedIn ? "Logout" : "Login"}
        >
          {user.isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
};

export default Header;
