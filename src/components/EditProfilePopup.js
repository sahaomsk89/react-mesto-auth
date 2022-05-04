import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = React.useState({});
  const [about, setAbout] = React.useState({});

  function handleName(e) {
    setName(e.target.value);
  }

  function handleJob(e) {
    setAbout(e.target.value);
  }

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, isOpen]);

  const handleSubmit = (event) => {
    // Запрещаем браузеру переходить по адресу формы
    event.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: name,
      about: about,
    });
  };

  //console.log(onUpdateUser)

  return (
    <PopupWithForm
      title={"Редактировать профиль"}
      onClose={onClose}
      isOpen={isOpen}
      name={"profile"}
      onSubmit={handleSubmit}
      buttonText={`${isLoading ? `Сохранение...` : `Сохранить`}`}
    >
      <input
        type="text"
        placeholder="Введите имя"
        value={name || ""}
        onChange={handleName}
        className="popup-form__input popup-form__input_name"
        id="name"
        name="name"
        minLength="2"
        maxLength="40"
        require="true"
      />
      <span className="input-name-error popup-form__error"></span>
      <input
        type="text"
        placeholder="Описание"
        value={about || ""}
        onChange={handleJob}
        className="popup-form__input popup-form__input_job"
        id="about"
        name="about"
        minLength="2"
        maxLength="200"
        require="true"
      />
      <span className="input-job-error popup-form__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
