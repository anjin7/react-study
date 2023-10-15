import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

export default function IndexPage() {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/list/${id}`);
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
      <div className='container--home'>
        <h1>The New York Times Best Seller Explorer</h1>
      </div>
      <style jsx>{`
        .container--home{
          width: 640px;
          margin: 0 auto;
          padding: 30px 40px;
          background-color: #fff;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 20px 60px -20px,
            rgba(0, 0, 0, 0.3) 0px 10px 60px -30px;
        }
        .container--home h1 {
          font-size: 28px;
          margin-bottom: 20px;
        }
        
      `}</style>
    </div>
  );
}
