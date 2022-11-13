import Link from "next/link";

export default function Header() {
  return (
    <div id="header" className="header">
      Header Section
      <nav>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/#projects" scroll={false}>
              projects
            </Link>
          </li>
          <li>
            <Link href="/#objects" scroll={false}>
              objects
            </Link>
          </li>
          <li>
            <Link href="/#about" scroll={false}>
              about
            </Link>
          </li>
          <li>
            <Link href="/#contact" scroll={false}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
