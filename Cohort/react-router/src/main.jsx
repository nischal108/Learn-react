import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route  } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';


// way n0. 1 of defining a route 

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element :<Layout/>,
//     children : [
//       {
//         path:'',
//         element :<Home/>
//       },
//       {
//         path:'about',
//         element : <About/>
//       },
//       {
//         path :'contact',
//         element : <Contact/>
//       }
//     ]

//   }
// ])


// 2nd way of defining route 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
