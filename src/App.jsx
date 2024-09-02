import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLeaut from './layout/MainLeaut'
import Home from './pages/Home'
import Abaut from './pages/Abaut'
import Produkt from './pages/Produkt'
import "./App.css"
import Card from './pages/Cart'
import ToliqMalumodlar from './pages/ToliqMalumodlar'
function App() {
  let router=createBrowserRouter([
    {
      path:"/",
      element:<MainLeaut/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/abaut",
          element:<Abaut/>
        },
        {
          path:"/product",
          element:<Produkt/>
        },
        {
          path:"/cart",
          element:<Card/>
        },
        {
          path:"/toliq",
          element:<ToliqMalumodlar/>
        }

      ]
    }
  ])
  return (
     <>
     <RouterProvider router={router}/>
     </>
  )
}

export default App