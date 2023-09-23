import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { authors } from "../../db";

function Character() {
  console.log(useOutletContext());
  const { authorId } = useParams();
  return (
    <div>
      <h1>
      
      </h1>
      <hr />
      <ul>
        
      </ul>
    </div>
  );
}
export default Character;