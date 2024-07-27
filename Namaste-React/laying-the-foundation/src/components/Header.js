import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md  ">
      <div className="flex items-center">
        <img src={LOGO_URL} alt="Logo" className="h-16 w-16 object-cover" />
      </div>
      <div className="flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
        <Link to="/popular" className="text-gray-700 hover:text-gray-900">Popular</Link>
        <Link to="/restaurants" className="text-gray-700 hover:text-gray-900">Restaurants</Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contacts</Link>
      </div>
    </div>
  );
};

export default Header;
