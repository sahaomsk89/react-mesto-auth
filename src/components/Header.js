import React from "react";
import { Link, useLocation, Route, Switch } from "react-router-dom";

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
        <Switch>
          <Route path="/sign-up">
            <Link to="/sign-in" className="header__authorization">
              Войти
            </Link>
          </Route>
          <Route path="/sign-in">
            <Link to="/sign-up" className="header__authorization">
              Регистрация
            </Link>
          </Route>
        </Switch>
        
        {location.pathname === "/" ? (
          <>
            <div className="header__email">{email}</div>

            <Link
              onClick={props.SignOut}
              className="header__authorization"
              to={"/sign-in"}
            >
              Выйти
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
