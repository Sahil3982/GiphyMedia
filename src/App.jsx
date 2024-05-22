import { createBrowserRouter } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      element : <AppLayout />,

      children : [
        {
          path : '/',
          element : <Home />
        }
      ]
    }
  ])

  return (
    <>

    </>
  )
}

export default App
