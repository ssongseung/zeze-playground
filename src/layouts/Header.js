import { Link } from "react-router-dom";

function Header() {
  const menuItems = [
    { to: "/guide", name: "Guide" },
    { to: "/chatgpt", name: "ChatGPT" },
    { to: "/shop", name: "SHOP" },
  ];

  return (
    <>
      <header className="header">
        <h1 className="header__title">
          <Link to="/">ZEZE의 연습장</Link>
        </h1>
        <nav className="header__nav">
          <ul className="navbar-nav">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={item.to} target="_self">
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__subnav">
          <ul className="navbar-subnav">
            <li className="subnav-item">
              <p>1</p>
            </li>
            <li className="subnav-item">
              <p>2</p>
            </li>
            <li className="subnav-item">
              <p>3</p>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
