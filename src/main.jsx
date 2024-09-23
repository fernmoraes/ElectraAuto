import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'
import Login from './routes/Contato.jsx'

const router = createBrowserRouter([
  {
    //Elementos Pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elementos Filho
    children:[
      {path:'/',element:<Home/>},
      {path:'/login', element:<Login/>},
      {path:'/dashboard',element:<Dashboard/>},
      {path:'/usuario', element:<Usuario/>},
    ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
