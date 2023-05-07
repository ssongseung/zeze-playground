import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">
          <Link to="/">ZEZE의 연습장</Link>
        </h1>
        <nav className="header__nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/blog" target="_self"><span>Blog</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chatgpt" target="_self"><span>ChatGPT</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop" target="_self"><span>SHOP</span></Link>
              <p></p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;