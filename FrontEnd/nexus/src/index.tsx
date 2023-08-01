import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import '@assets/index.css'
import HomePage from '@/pages/HomePage/HomePage'
import Epc from '@pages/Epc/Epc'
import { ThemeProvider } from '@providers/ThemeProvider'
import Updates from '@pages/Updates/Updates'
import Tasks from '@pages/Tasks/Tasks'
import Pipeline from '@pages/Pipeline/Pipeline'


// # Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "epc",
    element: <Epc />
  },
  {
    path: "pipeline",
    element: <Pipeline />
  },
  {
    path: "tasks",
    element: <Tasks />
  },
  {
    path: "updates",
    element: <Updates />
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
