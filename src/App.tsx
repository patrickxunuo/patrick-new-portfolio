import "./App.scss";
import Home from "./pages/home";
import Layout from "./components/Layout";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
