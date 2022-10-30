import NavBar from "../page/navbar";
import React, { useState, useEffect } from "react";
import { ShippedModel } from "../../models/shipped.models";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getForId, save, update } from "../../services/ShipMethodServices";

export function ShippedForm() {
  const { id } = useParams();
  const [shipped, setShipped] = useState(ShippedModel());
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {

    if (location.pathname === "/shippedDetails/" + id) {
      
      setVisible(true);
      document.getElementById("save").hidden = true;
    }
    console.log(location.pathname);

    if (id) {
      getForId(id).then((result) => {
        console.log(result);
        setShipped(result);
      });
    }
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(shipped));
    save(shipped);
  };

  const handleChage = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setShipped({ ...shipped, [name]: value });
  };

  function saveShipMethod() {
    if (id != null) {
      update(shipped);
    } else {
      shipped.shipMethodId = 0;
      save(shipped);
    }
    window.location = "/shippedList";
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid">
        <div className="mt-5 card col-md-4 mx-auto">
          <div className="card-body">
            <h5 className="card-title">Shipped</h5>
            <form onSubmit={handleSubmit} id="form">
              <fieldset disabled={visible}>
                <div className="form-group">
                  <input
                    hidden
                    type="text"
                    className="form-control"
                    name="shipMethodId"
                    onChange={handleChage}
                    placeholder=""
                    value={shipped.shipMethodId || ''}
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={handleChage}
                    placeholder=""
                    value={shipped.name || ""}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">ShipBase</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChage}
                    name="shipBase"
                    placeholder=""
                    value={shipped.shipBase || ""}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">ShipRate</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChage}
                    name="shipRate"
                    placeholder=""
                    value={shipped.shipRate || ""}
                  ></input>
                </div>

                <div className="form-group">
                  <button type="submit" className=" ml-1 btn btn-primary" id="save" onClick={() => saveShipMethod()}>
                    Guardar
                  </button>
                </div>
              </fieldset>
            </form>
            <Link to="/shippedList">
              <button className="btn btn-primary">Regresar</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
