import React from 'react';
import Navbar from './components/navbar.jsx';
import Footer from './components/Footer.jsx'; 
import Body from './components/Body.jsx'; 
import Card from './components/Card.jsx';// Relative path to Navbar.jsx

const App = () => {
  return (
    <>
          <Navbar/>
          <Body/>
          <div className="flex justify-center flex-wrap items-center min-h-screen bg-gray-100">
      <Card className="mr-3"
        title="Product 1"
        description="High-quality product description. Customize me as needed!"
        imageUrl="https://placekitten.com/400/300" 
        price="99.99"
      />
      <Card className="mr-3"
        title="Product 1"
        description="High-quality product description. Customize me as needed!"
        imageUrl="https://placekitten.com/400/300" 
        price="99.99"
      />
      <Card className="mr-3"
        title="Product 1"
        description="High-quality product description. Customize me as needed!"
        imageUrl="https://placekitten.com/400/300" 
        price="99.99"
      />
      <Card className="mr-3"
        title="Product 1"
        description="High-quality product description. Customize me as needed!"
        imageUrl="https://placekitten.com/400/300" 
        price="99.99"
      />
      <Card
        title="Product 2"
        description="Another great product description. Tailor me to suit your needs!"
        imageUrl="https://placekitten.com/401/300" 
        price="129.99"
      />
       <Card
        title="Product 1"
        description="High-quality product description. Customize me as needed!"
        imageUrl="https://placekitten.com/400/300" 
        price="99.99"
      />
      
    </div>
      <Footer/>
     
      
      </>
  );
};

export default App;
