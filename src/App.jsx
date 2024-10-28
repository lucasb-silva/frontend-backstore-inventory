// Biblioteca para exibir mensagens de erro estilizadas
import { ToastContainer } from 'react-toastify'
// Biblioteca para fazer o roteamento entre as páginas 
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
// Arquivo de estilização do toastfiy
import 'react-toastify/dist/ReactToastify.css'
// Arquivo de estiliazação da página
import './App.css'

// Páginas e componentes da aplicação
import Home from './pages/Home'
import Header from './components/Header/Header'
import Create from './pages/Create'

const router = createBrowserRouter([
  {
    element:
      (
        <>
          <div>
            <Header />
            {/* Renderiza os componentes/páginas filhos do elemento*/}
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
        path: '/create',
        element: <Create />
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
