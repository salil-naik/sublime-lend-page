import logo from "../../assets/sublime-logo.png";
import style from "./header.module.scss";

import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="d-flex align-items-center">
        <img src={logo} alt="sublime logo" className={style.logo} />
        <nav className={style.nav}>
          <NavLink to="/dashboard" activeClassName={style.active}>
            Dashboard
          </NavLink>
          <NavLink to="/borrow" activeClassName={style.active}>
            Borrow
          </NavLink>
          <NavLink to="/lend" activeClassName={style.active}>
            Lend
          </NavLink>
          <NavLink to="/profile" activeClassName={style.active}>
            Your profile
          </NavLink>
        </nav>
      </div>
      <button className="btn btn-light" style={{ justifySelf: "flex-end" }}>
        Get verified
      </button>
    </header>
  );
};
