import { createBrowserRouter } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';

import Author from './screens/author/Author';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "character/:id",
        element: <Author />,
        
      },
    ],
    errorElement:<NotFound />
  },
]);

export default router;