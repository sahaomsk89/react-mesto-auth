import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrap">
          <button
            className="profile__avatar-overlay"
            type="button"
            aria-label="редактировать аватар"
            onClick={onEditAvatar}
          ></button>
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Жак-Ив Кусто"
          />
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__title">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>

          <button
            className="profile__edit-button"
            type="button"
            aria-label="редактировать место"
            onClick={onEditProfile}
          ></button>
        </div>

        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить место"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="gallery">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
