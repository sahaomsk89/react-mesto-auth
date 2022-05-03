import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `gallery__delete-button ${
    !isOwn && "gallery__delete-button_hidden"
  }`;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `gallery__button ${
    isLiked && "gallery__button_active"
  }`;

  const handleClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return (
    <div className="gallery__cart">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <img
        className="gallery__view-button gallery__item"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <div className="gallery__description">
        <div className="gallery__list-item">
          <h2 className="gallery__title">{card.name}</h2>
          <div className="photo__likes-block">
            <button
              className={cardLikeButtonClassName}
              type="button"
              aria-label="поставить лайк"
              onClick={handleLikeClick}
            ></button>
            <span className="card-like-count">{card.likes.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
