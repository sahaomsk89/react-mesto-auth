import React from "react";

function PopupWithForm({
  name,
  isOpen,
  onClose,
  children,
  buttonText,
  title,
  onSubmit,
}) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="закрыть"
          onClick={onClose}
        ></button>
        <h2 className={`popup__title popup__title_for${name}`}>{title}</h2>
        <form
          className={`popup-form popup-form__input_${name}`}
          name={name}
          onSubmit={onSubmit}
          action="#"
          method="post"
        >
          {children}
          <button
            className={`popup-form__button popup-form__button_for_${name}`}
            type="submit"
          >
            {" "}
            {buttonText}{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
