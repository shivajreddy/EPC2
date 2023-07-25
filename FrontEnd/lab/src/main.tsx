import ReactDOM from 'react-dom/client'
import App from './scenes/App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Page1 from './scenes/Page1.tsx'
import "./input.css"
import Lab from './scenes/Lab.tsx'



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
    {
      path: "/lab",
      element: <Lab />
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
