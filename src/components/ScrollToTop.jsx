import React from "react";

export function ScrollToTop() {
  return (
    <button
      onScroll={onScroll}
      className={`btn btn-sec btn-fab bottom-right-10`}>
      <i className="fas fa-angle-up"></i>
    </button>
  );
}
