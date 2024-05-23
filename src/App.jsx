import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Category from "./Pages/Category"
import Search from "./Pages/Search"
import Favorites from "./Pages/Favorites"
import SingileGif from "./Pages/SingileGif"
import AppLayout from "./Layouts/AppLayout"
import Home from "./Pages/Home"

function App() {

  const router = createBrowserRouter([
    {
      element : <AppLayout />,

      children : [
        {
          path : '/',
          element : <Home />
        },
        {
          path : '/:category',
          element : <Category />
        },
        {
          path : '/search/:query',
          element : <Search />
        },
        {
          path : '/favorites',
          element : <Favorites />
        },
        {
          path : '/:type/:slug',
          element : <SingileGif />
        },
      ]
    }
  ])

  return (
   <RouterProvider router={router}/>
  )
}

export default App
