import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Page1 from './scenes/Page1.tsx'
import "./input.css"

const Index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/1",
      element: <Page1 />
    },
  ]);

  return (
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Index />
)
