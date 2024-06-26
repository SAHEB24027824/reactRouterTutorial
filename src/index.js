import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Posts from './pages/Posts';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<ContactUs/>
      },
      {
        path:'/posts',
        element:<Posts/>,
        children:[
          {
            path:'/posts/:id',
            element:<Post/>
          }
        ]
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
