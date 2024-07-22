import { LOGO_URL } from "../../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img src={LOGO_URL} alt="Logo" />
        </div>
        <div className="menu-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Popular</li>
            <li>Restaurants</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;