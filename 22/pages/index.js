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
      <NavBar />
      Home
    </div>);
}
