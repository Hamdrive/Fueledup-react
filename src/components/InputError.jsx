import React from "react";

export function InputError({ errorMessage, type = "" }) {
  console.log(errorMessage);
  return (
    <div
      className={`align-center flex-row input-error  my-sm ${
        type === "spanError" ? "span-2" : ""
      }`}>
      {errorMessage && (
        <>
          <i className="fas fa-sm fa-exclamation-circle"></i>&nbsp;
          <p className="txt-sm txt-semibold">{errorMessage}</p>
        </>
      )}
    </div>
  );
}
