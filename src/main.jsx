import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import './index.css'
import ErrorPage from './error-page'
import Post from './components/Post/Post';
import "bootstrap/dist/css/bootstrap.min.css"
import Middle from './components/Middle/Middle';

//<Header />
//<Left />
//<Middle />
//<Right />
//<Footer  />
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Post/>
      },
      {
        path: "second",
        element: <Middle/>
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
