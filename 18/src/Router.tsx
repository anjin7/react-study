import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import ComingSoon from './screens/ComingSoon';
import NowPlaying from './screens/NowPlaying';

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
        path: "coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
      },
    ],
    errorElement:<NotFound />
  },
]);

export default router;