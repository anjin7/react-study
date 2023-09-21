import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { authors } from "../../db";

function Author() {
  // console.log(useOutletContext());
  const { authorName, bookTitle } = useParams();
  return (
    <div>
      <h1>
        {authorName}
      </h1>
      <hr />
      <ul>
      {authors.filter((e) => e.name === authorName).map((author) => (
        author.book.map((ee) => (
          <li>
            <Link to={`${ee.title}`}>{ee.title}</Link>
          </li>          
        ))
      ))}
      </ul>      
      <Outlet
        context={{
          nameOfAuthor: authorName,
          titleOfBook: bookTitle,
        }}
      />
    </div>
  );
}
export default Author;