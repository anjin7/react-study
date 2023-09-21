import { useOutletContext, useParams } from "react-router-dom";
import { authors } from "../../db";

interface IFollowersContext {
  characterName: string;
}

function Character() {
  const { characterName } = useOutletContext<IFollowersContext>();
  const { authorName, bookTitle } = useParams();
  return (
    <div>
      <h2>{bookTitle} Character</h2>
      <hr />
      <ul>
        {authors.filter((e) => e.name === authorName)
          .map((e) => e.book.filter((ee) => ee.title === bookTitle)
            .map((eee) => (eee.character.map((eeee) => (<li>{eeee}</li>)))))}
      </ul>
    </div>
  );
}
export default Character;