import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";

interface IFollowersContext {
  nameOfAuthor: string;
  titleOfBook: string;
}

function Books() {
  const { titleOfBook } = useOutletContext<IFollowersContext>();
  const { chapterName,characterName } = useParams();
  return (
    <div>
      <h2>{titleOfBook}</h2>
      <hr />
      <ul>
        <li>
          <Link to="chapters">Chapter</Link>
        </li>
        <li>
          <Link to="characters">Character</Link>
        </li>
      </ul>
      <Outlet context={{
        nameOfChapter: chapterName,
        nameOfChracter: characterName
          }} />
    </div>
  );
}
export default Books;