import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './scenes/HomePage.tsx'
import Page1 from './scenes/Page1.tsx'
import Page2 from './scenes/Page2.tsx'
import { setToLS } from './theme/storage.ts'

import * as themes from './theme/themes.json'

const Index = () => {
  setToLS('all-themes', themes);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/1",
      element: <Page1 />
    },
    {
      path: "/2",
      element: <Page2 />
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Index />
)
