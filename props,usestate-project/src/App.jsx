import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App = () => {

  const data = [
    {image:"https://i0.wp.com/www.nepalitrends.com/wp-content/uploads/2018/06/Neetesh-Jung-Kunwar.png?resize=760%2C456&ssl=1", Name:"Hamro Nepal ma", artist:"Nitesh Jung Kunwar", favourite:false},
    {image:"https://www.hollywoodreporter.com/wp-content/uploads/2012/03/justin-bieber-pr-2012-l.jpg?w=2000&h=1126&crop=1", Name:"Baby", artist:"Justiy Beiber", favourite:false},
    {image:"https://i.ytimg.com/vi/RHuMV3R9M4w/maxresdefault.jpg", Name:"Baby Doll", artist:"Shreya Ghosal", favourite:false},
    {image:"https://timesofindia.indiatimes.com/photo/msid-85295992/85295992.jpg?resizemode=4", Name:"Sakhiyan 2.0", artist:"Arijit Singh", favourite:false},
    {image:"https://i0.wp.com/www.nepalitrends.com/wp-content/uploads/2018/06/Neetesh-Jung-Kunwar.png?resize=760%2C456&ssl=1", Name:"Hamro Nepal ma", artist:"Nitesh Jung Kunwar", favourite:false},
    {image:"https://www.hollywoodreporter.com/wp-content/uploads/2012/03/justin-bieber-pr-2012-l.jpg?w=2000&h=1126&crop=1", Name:"Baby", artist:"Justiy Beiber", favourite:false},
    {image:"https://i.ytimg.com/vi/RHuMV3R9M4w/maxresdefault.jpg", Name:"Baby Doll", artist:"Shreya Ghosal", favourite:false},
    {image:"https://timesofindia.indiatimes.com/photo/msid-85295992/85295992.jpg?resizemode=4", Name:"Sakhiyan 2.0", artist:"Arijit Singh", favourite:false}
  ]

  const[songs, setSongs]=useState(data);

function addtoFavourite(clickedIndex) {
  setSongs(prev => (
    prev.map((song, index) => {
      if (index === clickedIndex)
          return { ...song, favourite: !prev[index].favourite };
      return song;
    })
  ));
}



  return (
    <div className='w-full h-screen  px-12'>
      <Navbar songs={songs}/>
      <div className='w-full py-3 mt-3 flex flex-wrap gap-10'>
        {songs.map((song, index) => (
            <Card key={index} song={song} index={index} addtoFavourite= {addtoFavourite}/>
        ))}
      </div>
    </div>
  )
}

export default App