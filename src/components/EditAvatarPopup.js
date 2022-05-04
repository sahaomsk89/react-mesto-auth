import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  }

  React.useEffect(() => {
    avatarInputRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      title={"Обновить аватар"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name={"avatar"}
      buttonText={`${isLoading ? `Сохранение...` : `Сохранить`}`}
    >
      <input
        type="url"
        placeholder="Ссылка на картинку"
        ref={avatarInputRef}
        className="popup-form__input  popup-form__input_avatar"
        id="card-avatar"
        name="avatar-link"
        require="true"
      />
      <span className="popup-form__error card-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
