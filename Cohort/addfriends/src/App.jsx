import React, { useState } from 'react';
import Card from './Components/Card';

const App = () => {
  const data = [
    { Name: "Jacquiline", profession: "doctor", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", friend: false },
    { Name: "Jacquiline", profession: "doctor", image: "https://i.pinimg.com/736x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg", friend: false },
    { Name: "Jacquiline", profession: "doctor", image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg", friend: false },
    { Name: "Jacquiline", profession: "doctor", image: "https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg", friend: false },
    { Name: "Jacquiline", profession: "doctor", image: "https://www.adorama.com/alc/wp-content/uploads/2017/06/1-shutterstock_588634790.jpg", friend: false },
    { Name: "Jacquiline", profession: "doctor", image: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg", friend: false }
  ];

  const [people, setPeople] = useState(data);

  const beFriend = (clickedIndex) => {
    setPeople((prevPeople) => {
      return prevPeople.map((prevPerson, index) => {
        if (index === clickedIndex) {
          return { ...prevPerson, friend: !prevPerson.friend };
        }
        return prevPerson;
      });
    });
  };

  return (
    <div className='w-full h-screen flex items-center justify-center gap-2 bg-slate-800 px-6'>
      {people.map((person, index) => (
        <Card
          key={index}
          person={person}
          beFriend={beFriend}
          index={index}
        />
      ))}
    </div>
  );
};

export default App;
