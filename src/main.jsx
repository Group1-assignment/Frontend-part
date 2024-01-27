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
