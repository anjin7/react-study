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
      setBest(results);
    })();
  }, []);
  console.log(best)
  return (
    <div className='container'>
      <h4>{router.query.name || "Loading..."}</h4>
      <div>
        {!best && <h4>Loading...</h4>}
      </div>
    </div>
  )
}