import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './View/ErrorPage';
import Home from './View/Home';
import { ROOT_HOME, ROOT_NEW_CONSULTATION } from './Constant/Constant';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Composents/keycloak';
import NewConsul from './View/NewConsult';


const router = createBrowserRouter([
  {
    path: ROOT_HOME,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROOT_NEW_CONSULTATION,
    element: <NewConsul />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReactKeycloakProvider authClient={keycloak}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </ReactKeycloakProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
