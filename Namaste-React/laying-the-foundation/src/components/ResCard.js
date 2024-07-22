
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

  export default ResCard;