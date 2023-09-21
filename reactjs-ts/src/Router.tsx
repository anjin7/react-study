import { createBrowserRouter } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import Author from './screens/authors/Author';
import Books from './screens/authors/Books';
import Chapter from './screens/authors/Chapter';
import Character from './screens/authors/Character';

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
        path: "author/:authorName",
        element: <Author />,
        children: [
          {
            path: ":bookTitle",
            element: <Books />,
            children: [
              {
                path: "chapters",
                element: <Chapter />
              },
              {
                path: "characters",
                element: <Character />
              },
            ]
          },
        ],
      },
    ],
    errorElement:<NotFound />
  },
]);

export default router;