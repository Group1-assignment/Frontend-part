import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import './index.css'

//<Header />
//<Left />
//<Middle />
//<Right />
//<Footer  />
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <div>Home</div>
      },
      {
        path: "second",
        element: <div>Second</div>
      },

      {
        path: "third",
        element: <div>Third</div>
      }
     

    ]
  },
  {

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
