import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-logo">
          <a href=".">Eiki Nakayama</a>
        </h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link href="/profile">History</Link>
            </li>
            <li className="header-nav-item">
              <Link href="/works">Works</Link>
            </li>
            <li className="header-nav-item">
              <Link href="/skill">Skill</Link>
            </li>
            <li className="header-nav-item">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
