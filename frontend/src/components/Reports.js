import React, { useState } from "react";
import Navbar from "./page/navbar";
import CheckBox from "./checkbox/Checkbox";
import CheckBox2 from "./checkbox/Checkbox2";
import { Table01 } from "./table/Table01";
import { Table02 } from "./table/Table02";
import "../index.css";
import { getReport1, getReport2 } from "../services/SalesServices";

function App() {
  var years = [];
  let json = "";
  const [reports, setReports] = useState([]);
  const [selectOption, setSelected] = useState();

  const eventoSelect = (event) => {
    const value = event.target.value;
    setSelected(value);
    console.log(selectOption);
  };

  const boton = () => {
    console.log("---------------------- array ------------------------");
    console.log(years);

    if (selectOption === "1") {
      getReport1(years).then((data) => {
        setReports(data);
      });
    } else if (selectOption === "2") {
      getReport2(years).then((data) => {
        setReports(data);
      });
    } else {
      console.log("Call services report 3");
    }
    //End promise
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>

        <div className="row mt-1 p-3 mx-auto">
          <div className="col-md-2">
            <div className="card card-selection">
              <div className="card-body">
                <div className="mt-3">
                  <label htmlFor="inputState">
                    <h6>Select a register type</h6>
                  </label>
                  <select
                    onChange={eventoSelect}
                    id="inputState"
                    className="form-control"
                  >
                    <option selected disabled value="0">
                      Choose...
                    </option>
                    <option value="1">Register 1</option>
                    <option value="2">Register 2</option>
                    <option value="3">Register 3</option>
                  </select>
                </div>
                <div>
                  {selectOption === "2" ? (
                    <CheckBox2 boton={boton} years={years} />
                  ) : (
                    <CheckBox boton={boton} years={years} />
                  )}
                </div>
              </div>
              <div className="card-footer">Footer</div>
              {json}
            </div>
          </div>

          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sales Registers</h5>
              </div>
              {selectOption === "3" ? (
                <Table02 reports={reports} />
              ) : (
                <Table01 reports={reports} />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
