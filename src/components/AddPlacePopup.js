import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const cardInputRef = React.useRef();
  const linkInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: cardInputRef.current.value,
      link: linkInputRef.current.value,
    });
  }

  React.useEffect(() => {
    cardInputRef.current.value = "";
    linkInputRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      title={"Новое место"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name={"gallery"}
      buttonText={`${isLoading ? `Сохранение...` : `Создать`}`}
    >
      <input
        type="text"
        placeholder="Название"
        className="popup-form__input popup-form__input_card-name"
        id="card-name"
        name="name"
        ref={cardInputRef}
        minLength="2"
        maxLength="30"
        required
      />
      <span className="input-name-error popup-form__error"></span>
      <input
        type="url"
        placeholder="Ссылка на картинку"
        className="popup-form__input popup-form__input_card-link"
        id="card-link"
        ref={linkInputRef}
        name="link"
        required
      />
      <span className="card-link-error popup-form__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
