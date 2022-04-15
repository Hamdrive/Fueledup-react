import React from "react";

export function Addresses() {
  return (
    <div>
      <h3 className="txt-capitalize txt-left">Address Book</h3>
      <div className="my-2">
        <ul>
          <li className="flex-row">
            <input className="w-10" type="radio" name="address" id="address" />
            <div className="w-100">
              <p className="h3">Carlos Sainz Jr.</p>
              <p>Viale di Vedano, 5, 20900 Monza MB, Italy</p>
              <p>123-456-789</p>
            </div>
          </li>
          <li className="flex-row gap-1">
            <input className="w-30 radiobutton" type="radio" name="address" id="address" />
            <div className="w-100">
              <p className="h3">Lewis Hamilton</p>
              <p>Towcester NN12 8TN, United Kingdom</p>
              <p>123-456-789</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
