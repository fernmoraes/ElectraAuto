import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'
import Login from './routes/Login.jsx'
import CadastrarProduto from './routes/CadastrarProduto.jsx'
import ListarUsuarios from './routes/ListarUsuarios.jsx'


const router = createBrowserRouter([
  {
    //Elementos Pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elementos Filho
    children:[
      {path:'/',element:<Home/>},
      {path:'/login', element:<Login/>},
      {path: '/produtos', element: <Produtos />},
      {path: '/sobre', element: <Sobre />},
      {path: '/cadastrarproduto', element: <CadastrarProduto />},
      {path:'/listarUsuarios', element:<ListarUsuarios/>},
    ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
