import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import App from "./App";
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import Character from './screens/Character';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "character/:characterId",
        element: <Character />,
      },
    ],
    errorElement:<NotFound />
  },
]);

export default router;