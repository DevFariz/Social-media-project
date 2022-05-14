import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        <li className={classes.item}>
          <a className={`${classes.link} ${classes.active}`} href="/profile">
            Profile
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="/dialogs">
            Messages
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#s">
            News
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#s">
            Music
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#s">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
