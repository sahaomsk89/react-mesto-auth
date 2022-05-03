import React, { useState } from "react";
import AuthorizationForm from "./AuthorizationForm";
const Login = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      return;
    }

    props.handleLogin(inputs.email, inputs.password);
  };

  return (
    <AuthorizationForm
      title={"Вход"}
      name={"authorization"}
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Email"
        value={inputs.email}
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
        value={inputs.password}
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
        {" "}
        {`Войти`}{" "}
      </button>
    </AuthorizationForm>
  );
};

export default Login;
