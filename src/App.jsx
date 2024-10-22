import { ToastContainer } from 'react-toastify'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header/Header'

const router = createBrowserRouter([
  {
    element:
      (
        <>
          <div>
            <Header />
            <Outlet />
          </div>
        </>
      ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/teste',
        element: <>Teste</>
      }
    ]
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}
