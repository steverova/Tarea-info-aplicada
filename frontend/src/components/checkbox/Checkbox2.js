import React, { useState } from "react";

export default function CheckBox2({ boton, years }) {

  const [checked, setChecked] = useState(true);

  const handleOnChange = (event) => {
    const value = event.target.value;

    setChecked(event.target.value);
    console.log(value);

    if (checked) {
      years.pop(Number(value));
      years.push(Number(value));
    }
  };

  return (
    <React.Fragment>
      <div className="mt-3">
        <p>
          <small>This registry allows unique selection</small>
        </p>
        <h5 className="card-title">Years</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="topping"
            name="2011"
            value={"2011"}
            checked={checked === "2011"}
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
            value={"2012"}
            checked={checked === "2012"}
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
            name="2013"
            value={"2013"}
            checked={checked === "2013"}
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
            value={"2014"}
            checked={checked === "2014"}
            onChange={handleOnChange}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            2014
          </label>
        </div>
        <div className="mt-3">
          <button
            onClick={boton}
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