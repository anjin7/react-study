import { Link, useSearchParams } from "react-router-dom";
import { authors } from "../db";

function Home() {
  const [readSearchParms, setSearchParams] = useSearchParams();
  // console.log(readSearchParms.get("geo"));
  // setTimeout(() => {
  //   setSearchParams({
  //     day: "today",
  //     tomorrow: "123",
  //   });
  // }, 3000);
  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Link to={`/authors/${author.name}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;