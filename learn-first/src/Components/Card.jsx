import React from 'react';

function Card() {
  const data = [
    {
      image: "https://www.planetware.com/wpimages/2019/12/nepal-in-pictures-beautiful-places-to-photograph-annapurna-range.jpg",
      name: "Nepal",
      description: "Nepal is a beautiful country where Gautam Buddha was born.",
      canVisit: true
    },
    {
      image: "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_553984249v2.jpg",
      name: "Peru",
      description: "Peru is famous for its ancient Inca city Machu Picchu, located high in the Andes mountains.",
      canVisit: false
    },
    {
      image: "https://media.cnn.com/api/v1/images/stellar/prod/191011110307-02-australia-beautiful-places.jpg?q=w_1110,c_fill",
      name: "Australia",
      description: "Australia is known for its Great Barrier Reef, the world's largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres (1,400 mi) over an area of approximately 344,400 square kilometres (133,000 sq mi).",
      canVisit: true
    },
    {
      image: "https://afar.brightspotcdn.com/dims4/default/55b4d7f/2147483647/strip/true/crop/1357x720+41+0/resize/1440x764!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fcf%2F8a%2F20b4a2c544a58be93512ad67084c%2Fbohler-japankk-4006.jpg",
      name: "Japan",
      description: "Japan is a country in East Asia. It is an island nation, consisting of thousands of islands. Japan is famous for its rich history, culture, and beautiful scenery.",
      canVisit: true
    },
    {
      image: "https://afar.brightspotcdn.com/dims4/default/ca21622/2147483647/strip/true/crop/2000x1061+0+14/resize/1440x764!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F0f%2F2c%2F6f2efc02b5ba681dadbfa694f856%2Foriginal-egypt.jpg",
      name: "Egypt",
      description: "Egypt is a country located in the northeastern corner of Africa. It is famous for its ancient pyramids and pharaohs.",
      canVisit: false
    }
  ];

  return (
    <div className='w-full min-h-screen bg-zinc-200 flex flex-wrap justify-center gap-5 p-2'>
      {data.map((elem, index) => (
        <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-zinc-100 rounded-lg overflow-hidden shadow-lg hover:cursor-pointer'>
          <div className='h-48 overflow-hidden'>
            <img className="w-full h-full object-cover" src={elem.image} alt={elem.name} />
          </div>
          <div className="p-4">
            <h2 className='font-semibold text-lg mb-2'>{elem.name}</h2>
            <p className='text-sm text-gray-700 mb-4 h-16 overflow-hidden'>{elem.description}</p>
          </div>
          <div className="px-4 pb-4">
            <button onClick={()=>{
                alert(`${elem.canVisit ? `Yes you can visit ${elem.name}` : `Sorry but you can't visit ${elem.name}`}`);
            }} className={` ${elem.canVisit ? "bg-blue-500" : "bg-red-500"} text-white py-2 px-4 rounded-lg`}>
              {elem.canVisit ? "Visit" : "Can't visit"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
