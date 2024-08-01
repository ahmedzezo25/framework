import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
import Portfolio from './Component/Portfolio/Portfolio'






 let x = createBrowserRouter ([
  {path: "", element: <Layout/>,children:[
    {index: true, element: <Home/>},
    {path: "about", element: <About/>},
    {path: "contact", element: <Contact/>},
    {path: "portfolio", element: <Portfolio/>},
    
    
  ]}
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<RouterProvider router={x}></RouterProvider>
 
    </>
  )
}

export default App
