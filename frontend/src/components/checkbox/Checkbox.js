import React, { useState } from "react";

export default function CheckBox({ boton, years }) {
  const [checked, setChecked] = useState();

  const handleOnChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      console.log("✅ Checkbox is checked - push " + value);
      years.push(Number(value));
    } else {
      console.log("⛔️ Checkbox is NOT checked - pop " + value);
      years.pop(Number(value));
    }

    console.log(years);
  };

  const handleClick = (event) => {
    setChecked(false);
    boton();
  };

  return (
    <React.Fragment>
      <div className="mt-1">
        <p>
          <small>This registry allows multiple selection</small>
        </p>
        <h6 className="mt-2 card-title">Years</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="topping"
            name="2011"
            value="2011"
            checked={checked}
            onChange={handleOnChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            2011
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="topping"
            name="2012"
            checked={checked}
            value="2012"
            onChange={handleOnChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            2012
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="topping"
            checked={checked}
            name="2013"
            value="2013"
            onChange={handleOnChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            2013
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="topping"
            name="2014"
            checked={checked}
            value="2014"
            onChange={handleOnChange}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            2014
          </label>
        </div>
        <div className="mt-3">
          <button
            onClick={handleClick}
            className="btn btn-primary btn-block"
            type="submit"
          >
            Accept
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
