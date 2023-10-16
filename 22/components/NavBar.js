import Link from "next/link";
import { useRouter } from "next/router";


export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          background-color: #fff;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          border: 1px solid black;
        }
        nav a {
          font-weight: 900;
          font-size: 22px;
          border-bottom: 1px solid black;
          margin: 0 10px;
        }
        nav a:hover{
          border-bottom: 1px solid silver;
          color: rgb(225, 140, 235);
        }
        .active {
          color: rgb(190, 85, 185);
        }
        nav div {

        }
      `}</style>
    </nav>
  )
}