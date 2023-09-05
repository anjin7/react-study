import Link from "next/link";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function NavBar() {
  // const router = useRouter();
  const pathname = usePathname();
  return (
    <nav>
      <Link href="/" style={{ color : pathname === '/' ? 'red' : 'blue' }}>
        Home
      </Link>
      <Link href="/about" style={{ color : pathname === '/about' ? 'red' : 'blue' }}>
        About
      </Link>
      
    </nav>
  )
}