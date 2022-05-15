import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
            to="/"
          >
            Profile
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
            to="/dialogs"
          >
            Messages
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
            to="/music"
          >
            Music
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
