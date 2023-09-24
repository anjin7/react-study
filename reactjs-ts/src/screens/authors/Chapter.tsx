import { useParams } from "react-router-dom";
import { authors } from "../../db";


function Chapter() {

  const { authorName, bookTitle } = useParams();
  return (
    <div>
      <h2>{bookTitle} Chapter</h2>
      <hr />
      <ul>
        {authors.filter((e) => e.name === authorName)
          .map((e) => e.book.filter((ee) => ee.title === bookTitle)
            .map((eee) => (eee.chapter.map((eeee) => (<li>{eeee}</li>)))))}
      </ul>
    </div>
  );
}
export default Chapter;