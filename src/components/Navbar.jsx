const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#s">
            Profile
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#s">
            Messages
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#s">
            News
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#s">
            Music
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#s">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
