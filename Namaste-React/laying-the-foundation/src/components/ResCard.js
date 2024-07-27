import { IMAGES_FOODS_URL } from '../../utils/constants';


const ResCard = ({ name, type, rating, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{type}</p>
        <p className="text-yellow-500 font-semibold">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default ResCard;


export const VegResCard = (WrappedComponent) => {
  return (data) => {
    return (
      <div className="relative">
        <p className='absolute px-4 py-1 bg-green-500 text-white rounded-md shadow-md'>
          Veg
        </p>
        <WrappedComponent
          name={data.name}
          type={data.locality}
          rating={data.avgRating}
          image={data.cloudinaryImageId ? `${IMAGES_FOODS_URL}${data.cloudinaryImageId}` : ''}
        />
      </div>
    );
  };
};
