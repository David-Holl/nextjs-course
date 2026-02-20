import Link from "next/link";
export default function Navigation() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            Startseite
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/article" className="nav-link">
            Artikeluebersicht
          </Link>
        </li>
      </ul>
    </div>
  );
}
