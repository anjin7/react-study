import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const router = useRouter();
  const onClick = (id) => {
    router.push(
      {
        pathname: `/list`,
        query: {
          name : id
        },
      },
      `/list/${id}`
    );
  };
  const [list, setList] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://books-api.nomadcoders.workers.dev/lists`
        )
      ).json();
      setList(results);
    })();
  }, []);
  return (
    <div>
      <div className='container'>
        <h1>The New York Times Best Seller Explorer</h1>
        <div className='container--list'>
          {!list && <h4>Loading...</h4>}
          {list?.map((list) => (
            <div
              onClick={()=>onClick(list.list_name_encoded)}
              key={list.list_name_encoded}>
              <h4>
                <Link href={{
                pathname: `/list`,
                query: {
                  name: list.list_name_encoded,
                  }
                }}
                  as={`/list/${list.list_name_encoded}`}
                >
                  <a>{list.list_name} ➝</a>
                </Link>
              </h4>
            </div>
      ))}
        </div>
      </div>
    </div>
  );
}
