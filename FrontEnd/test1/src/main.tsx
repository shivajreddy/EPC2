import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import './index.css'
import LiveDashboardOld from './scenes/live_dashbaord/LiveDashboardOld'
import LiveDashboard from './scenes/live_dashbaord/LiveDashboard'
import Lab from './components/Lab'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/live",
    element: <LiveDashboard />
  },
  {
    path: "/lab",
    element: <Lab />
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
