import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="menu-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/popular"><li>Popular</li></Link>
          <Link to="/restaurants"><li>Restaurants</li></Link>
          <Link to="/contact"><li>Contacts</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
