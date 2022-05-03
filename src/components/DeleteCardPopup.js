import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ card, isOpen, onClose, onCardDelete, isLoading }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      title={"Вы уверены?"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name={"delete"}
      buttonText={`${isLoading ? `Удаление...` : `Да`}`}
    />
  );
}

export default DeleteCardPopup;
