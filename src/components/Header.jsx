import Image from "next/image"
import Link from "next/link"



export default function Header() {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={'https://raw.githubusercontent.com/timeToCode-ali/nextjs-tutorial/main/public/images/logo_black.png'} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Sed ut perspiciatis unde omnis</p>
      </div>
    </header>
  )
}
