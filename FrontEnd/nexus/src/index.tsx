import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import '@assets/index.css'
import HomePage from '@/pages/HomePage/HomePage'
import Epc from '@pages/Epc/Epc'
import { ThemeProvider } from './providers'


// # Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/epc",
    element: <Epc />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
