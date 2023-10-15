import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function listIndex() {
  const router = useRouter();
  const [best, setBest] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://books-api.nomadcoders.workers.dev/list?name=${router.query.name}`
        )
      ).json();
      const books = results.books;
      setBest(books);
    })();
  }, []);
  return (
    <div className='container'>
      <h1>{ router.query.name.toUpperCase().split('-').join(' ') || "Loading..."}</h1>
      <div className='container--booklist'>
        {!best && <h4>Loading...</h4>}
        {best?.map((book) => (
          <div className="container--book" key={book.rank}>
            <h3>{book.title}</h3>
            <h5>{book.author}</h5>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}