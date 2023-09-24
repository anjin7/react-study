import { Link } from "react-router-dom";
import { authors } from "../db";

function Home() {
  return (
    <div>
      <h1>Author</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Link to={`/author/${author.name}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;