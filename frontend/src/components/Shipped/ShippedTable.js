import React, { useState, useEffect } from "react";
import { ShippedModel } from "../../models/shipped.models";
import { useNavigate, Link } from "react-router-dom";
import { deleted, getShipMethodList } from "../../services/ShipMethodServices";

export function ShippedTable() {
  const [shipped, setShipped] = useState([ShippedModel()]);

  useEffect(() => {
    getShipMethodList().then((data) => {
      setShipped(data);
    });
  }, [shipped]);

  const navigate = useNavigate();

  function deletedShipMethod(id) {
    deleted(id);
  }

  function edit(id) {
    navigate("/shipped/" + id);
  }

  return (
    <React.Fragment>
      <div className="container-fluid col-md-8 mt-5">
        <Link to="/shipped">
          <button className="btn btn-primary">Agregar</button>
        </Link>
        <div className="card mt-1">
          <div className="card-body">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>ShipMethodID</th>
                  <th>Name</th>
                  <th>ShipBase</th>
                  <th>ShipRate</th>
                  <th>Accions</th>
                </tr>
              </thead>
              <tbody>
                {shipped.map((data) => (
                  <tr>
                    <td>{data.shipMethodId}</td>
                    <td>{data.name}</td>
                    <td>{data.shipBase}</td>
                    <td>{data.shipRate}</td>
                    <td>
                      <button
                        className="button btn-ligtpurple"
                        title="edit"
                        onClick={() => edit(data.shipMethodId)}
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="button btn-red"
                        title="delete"
                        onClick={() => deletedShipMethod(data.shipMethodId)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>

                      <Link to={`/shippedDetails/${data.shipMethodId}`}>
                        <button className="button btn-blue" title="show">
                          <i class="fa-solid fa-eye"></i>
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
