import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login'
import Odkhel from './Pages/Odkhel'
import Home from './Pages/Home'
import Register from './Pages/Register'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/odkhel',
      element: <Odkhel />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
