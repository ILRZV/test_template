import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.PNG";
import user from "../../images/avatarWithoutPhoto.png";
import classes from "./Header.module.css";
function Header(props) {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" className={classes.logo}></img>
      <div className={classes.loginBlock}>
        {props.dataUser.isLogin ? (
          <NavLink to="/login" className={classes.name}>
            <span>{props.dataUser.login}</span>
          </NavLink>
        ) : (
          <NavLink to="/login" className={classes.login}>
            Login
          </NavLink>
        )}
        <img src={user} alt="user" className={classes.user}></img>
      </div>
    </header>
  );
}

export default Header;
