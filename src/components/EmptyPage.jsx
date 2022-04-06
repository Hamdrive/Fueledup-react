import React from "react";

export function EmptyPage({
  title,
  description,
  imgSrc,
  imgAlt,
  onClick,
  buttonText = "checkout products",
  type = "products",
}) {
  return (
    <div className="flex-column align-center h-100">
      <div className="empty__page">
        <img className="w-100 h-100" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="flex-column align-center txt-center">
        <h3>{title}</h3>
        <p>{description}</p>
        {type !== "products" && (
          <button
            onClick={onClick}
            className="btn btn-cta btn-lg flex-center txt-bold txt-reg mx-auto mt-1 mb-1 txt-center txt-wrap">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
