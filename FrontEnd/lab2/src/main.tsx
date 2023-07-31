import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './providers'
import AboutPage from './Views/AboutPage.tsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import TestSidebar from './components/TestSidebar.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/test",
    element: <TestSidebar />
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
  // </React.StrictMode>,
)
