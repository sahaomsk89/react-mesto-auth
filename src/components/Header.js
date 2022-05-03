import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  let location = useLocation();
  let { email } = props.userEmail || {};

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div
        className={`header__container ${
          location.pathname === "/" && "header__container_none"
        }`}
      >
        {location.pathname === "/main" ? (
          <>
            <div className="header__email">{email}</div>
            {/* <button onClick={props.handleSignOut} className="header__authorization">Выйти</button> */}
            <Link
              onClick={props.SignOut}
              className="header__authorization"
              to={"/sign-in"}
            >
              Выйти
            </Link>
          </>
        ) : location.pathname === "/sign-in" ? (
          <Link className="header__authorization" to={"/sign-up"}>
            Регистрация
          </Link>
        ) : location.pathname === "/sign-up" ? (
          <Link className="header__authorization" to={"/sign-in"}>
            Войти
          </Link>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
