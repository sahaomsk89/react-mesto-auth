import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthorizationForm from "./AuthorizationForm";

const Register = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = state;
    props.handleRegister(email, password).catch((err) => {
      setState((prev) => ({
        ...prev,
      }));
    });
  };

  return (
    <AuthorizationForm
      title={"Регистрация"}
      name={"authorization"}
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={handleChange}
        className="popup-form__input popup-form__input_authorization popup-form__input_name"
        id="email"
        name="email"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="input-name-error popup-form__error"></span>
      <input
        type="password"
        placeholder="Пароль"
        value={state.password}
        onChange={handleChange}
        className="popup-form__input popup-form__input_authorization popup-form__input_job"
        id="password"
        name="password"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="input-job-error popup-form__error"></span>
      <button
        className={`popup-form__button popup-form__button_authorization`}
        type="submit"
      >
        {`Зарегистрироваться`}
      </button>
      <Link to="/sign-in" className="popup__link">
        Уже зарегистрированы? Войти
      </Link>
    </AuthorizationForm>
  );
};

export default Register;
