import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";
import Image from "next/image";
import ThemeToggle from "../toggleTheme/ToggleTheme";

const Navbar = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <div className={styles.imageWrapper}>
          <Image src="/adlNplLogo.png" alt="About Us" fill />
        </div>
      </Link>
      <div className="flex gap-2 items-center">
        <ThemeToggle />
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar