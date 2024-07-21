import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" alt="Logo" />
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

const restaurantData = [
  {
    id: 1,
    name: "Fast as Quick",
    type: "Fast Food",
    rating: 4.5,
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Spicy Delight",
    type: "Indian Cuisine",
    rating: 4.7,
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Green Feast",
    type: "Vegetarian",
    rating: 4.2,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Seafood Paradise",
    type: "Seafood",
    rating: 4.8,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    name: "Sweet Tooth",
    type: "Desserts",
    rating: 4.9,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const ResCard = ({ name, type, rating, image }) => {
  return (
    <div className="res-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{type}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants..." />
      </div>
      <div className="res-cards">
        {restaurantData.map((restaurant) => (
          <ResCard
            key={restaurant.id}
            name={restaurant.name}
            type={restaurant.type}
            rating={restaurant.rating}
            image={restaurant.image}
          />
        ))}
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main-div">
      <Header />
      <Body />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Main />);
