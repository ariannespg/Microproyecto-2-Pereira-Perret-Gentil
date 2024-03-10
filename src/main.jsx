import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Registro from './routes/Registro.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx';
import InfoUser from './routes/InfoUser.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import { AuthProvider } from './auth/AuthProvider.jsx';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Registro />,
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/infouser',
        element: <InfoUser />,
      }
    ]
  }
]);

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthProvider>
//      <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  React.createElement(React.StrictMode, null,
    React.createElement(AuthProvider, null,
      React.createElement(RouterProvider, { router: router })
    )
  ),
  document.getElementById('root')
);
