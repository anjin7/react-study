import Link from "next/link";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import styles from './NavBar.module.css'

export default function NavBar() {
  // const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <Link href="/"
        className={`${styles.link} ${
            pathname === "/" ? styles.active : ""
          }`}
      >
        Home
      </Link>
      <Link href="/about"
        className={[
            styles.link,
            pathname === "/about" ? styles.active : "",
        ].join(" ")}
      >
        About
      </Link>
      
    </nav>
  )
}