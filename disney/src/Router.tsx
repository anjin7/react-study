import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import Character from './screens/character/Character';


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
        path: "character/:characterId",
        element: <Character />,
      },
    ],
    errorElement:<NotFound />
  },
]);

export default router;