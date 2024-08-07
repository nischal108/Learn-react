import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import { FaArrowAltCircleRight } from "react-icons/fa";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageArray = [
    "https://www.andbeyond.com/wp-content/uploads/sites/5/nepal-village.jpg",
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
    "https://theithacan.org/wp-content/uploads/2022/02/2.8-Cartoon_MikeRoss-3-1024x577.jpg",
    "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_655126330v2.jpg",
    "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1595073504/blog/dmida4bcnbnrejsq7lyw.jpg",
    "https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/covera-gh.jpg"
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  return (
    <div className='w-full h-screen bg-zinc-700 flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative w-60 h-40 overflow-hidden '>
          {imageArray.map((image, index) => (
            <Card key={index} image={image} index={index} currentIndex={currentIndex} />
          ))}
        </div>
        <span className='mt-5 inline-block'>
          <FaArrowAltCircleRight className='text-white text-3xl hover:text-green-500 cursor-pointer' onClick={handleNext} />
        </span>
      </div>
    </div>
  );
}

export default App;
