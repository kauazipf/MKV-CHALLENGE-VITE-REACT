import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Carros from "./routes/Carros/index.tsx";
import Chatbot from './routes/Chatbot/index.tsx';
import Error from './routes/Error/index.tsx';
import Login from './routes/Login/index.tsx';
import Participantes from './routes/Participantes/index.tsx';
import Servicos from './routes/Servicos/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/Carros",
        element: <Carros/>
      },
      {
        path: "/Chatbot",
        element: <Chatbot/>
      },
      {
        path: "/Login",
        element: <Login/>
      },
      {
        path: "/Participantes",
        element: <Participantes/>
      },
      {
        path: "/Servicos",
        element: <Servicos/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
