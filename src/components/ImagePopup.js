import React from "react";

function ImagePopup({ card, onClose }) {
  //console.log(card);
  return (
    <div
      className={`popup popup_type_image-container ${
        card.name && "popup_opened"
      }`}
    >
      <div className="popup__container-image">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
          aria-label="закрыть"
        ></button>
        <img className="popup__image-link" src={card.link} alt={card.name} />
        <h2 className="popup__place-name">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
