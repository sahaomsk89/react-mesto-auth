import React from "react";
import Progress from "../images/progress.svg";
import Fail from "../images/fail.svg";
function InfoTooltip({ isOpen, onClose, isolatePopup, status, infoMessage }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`} onClick={onClose}>
      <div className="popup__container " onClick={isolatePopup}>
        <button
          className="popup__close"
          type="button"
          aria-label="закрыть"
          onClick={onClose}
        ></button>
        {status ? (
          <img class="popup__img" src={Progress} alt="успешная регистрация" />
        ) : (
          <img class="popup__img" src={Fail} alt="регистация не удалась" />
        )}
        <h2 className={`popup__title popup__title_modal`}>{infoMessage}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
