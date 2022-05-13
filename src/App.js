import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <img
          className="header__logo"
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          alt="logo"
        />
      </header>
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
      <main className="main">
        <div>
          <img
            className="content__img"
            src="https://lh3.googleusercontent.com/VDPp6VUWdRyP3NjQjIcKUJc8M58XLQBRqNcxAJ8ID0KRRCprBl4G-a1VLg6kdHKDJncxmxPnxZo9QGPuHUvCMBAni2VxQ0EjfSvlvQHE=w1000?s=300"
            alt=""
          />
        </div>
        <div className="content">
          <div>ava + desc</div>
          <div>My posts</div>
          <div>New post</div>
          <div>Post1</div>
          <div>Post2</div>
        </div>
      </main>
    </div>
  );
};

export default App;
