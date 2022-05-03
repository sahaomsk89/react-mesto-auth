import React from "react";

function AuthorizationForm({ name, title, children, onSubmit }) {
  return (
    <div className="popup__container popup__container_authorization">
      <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
      <form
        className={`popup-form popup-form__input popup-form__input_${name}`}
        name={name}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
}

export default AuthorizationForm;
