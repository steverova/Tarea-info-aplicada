import React, { useState } from "react";
import axios from "axios";
import { HeaderModel } from "../../models/header.models";
import { DetailsModel } from '../../models/details.models';
import TableDetails from './TableDetails';


function TableHeader() {

  const [id, setid] = useState([]);
  const [header, setHeader] = useState(HeaderModel());
  const [details, setDetails] = useState([DetailsModel()])

  const handleChange = (event) => {
    const value = event.target.value;
    setid(value);
  };

  const handleChangeForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setHeader({ ...HeaderModel, [name]: value });

  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const options = {
      method: 'GET',
      withCredentials: false,
      url: `https://purchase-microservices.azurewebsites.net/purchases/${id}`
    };

    axios.request(options).then(function (response) {
      const data = response.data;
      // console.log(data["Header"]);
      // console.log(data["Details"]);
      setHeader(data["Header"]);
      setDetails(data["Details"]);
      console.log(data["Details"]);
      localStorage.setItem("details", JSON.stringify(data["Details"]
      ))

    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <React.Fragment>
      <div className="card card mt-3 col-sm-10 col-md-8 col-lg-8 mx-auto">
        <div className="card-body ">
          <div className="d-flex">
            <h5 className="card-title title-table">Facturacion</h5>
            <form onSubmit={handleSubmit} className="form-group form-inline ml-3">
              <div className="input-group">
                <input
                  type="text"
                  name="id"
                  className=" search-input form-control"
                  placeholder="Buscar..."
                  onChange={handleChange}
                ></input>
                <div className="input-group-append">
                  <button className="btn btn-pink" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <form onSubmit={handleSubmitForm}>

            <div className="form-row col-md-6 col-md-12">
              {/*-------- form row---------*/}
              <div className="form-row col-md-12 col-lg-6">
                <div className="form-group col-md-4 col-lg-4">

                  <small>
                    {" "}
                    <label className="form-label">OrderID </label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      name="PurchaseOrderID"
                      placeholder="PurchaseOrderID"
                      value={header.PurchaseOrderID}
                    ></input>
                  </small>
                </div>

                <div className="form-group  col-md-4 col-lg-4">
                  <small>
                    {" "}
                    <label className="form-label">Rev.Number </label>{" "}
                  </small>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    name="RevisionNumber"
                    placeholder=".RevisionNumber"
                    value={header.RevisionNumber || ''}
                    onChange={handleChangeForm}
                  ></input>
                </div>

                <div className="form-group  col-md-4 col-lg-4">
                  <small>
                    <label className="form-label">Status </label>
                  </small>
                  <select
                    className="form-control form-control-sm"
                    id="exampleFormControlSelect1"
                    name="RevisionNumber"
                    value={header.Status || ''}
                    onChange={handleChangeForm}
                  >
                    <option disabled selected>
                      Choose Status..
                    </option>
                    <option value="1">Pending</option>
                    <option value="2">Approve</option>
                    <option value="3">Rejected</option>
                    <option value="4">Complete</option>
                  </select>
                </div>
              </div>

              {/*-------- end form row---------*/}

              {/*-------- form row---------*/}
              <div className="form-row col-md-12 col-lg-6">
                <div className="form-group  col-md-4 col-lg-4">
                  <small>
                    <label className="form-label">EmployeeID </label>
                  </small>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    name="RevisionNumber"
                    placeholder=".EmployeeID"
                    value={header.EmployeeID || ''}
                    onChange={handleChangeForm}
                  ></input>
                </div>

                <div className="form-group col-md-4 col-lg-4">
                  <small>
                    <label className="form-label">VendorID </label>
                  </small>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    name="RevisionNumber"
                    placeholder=".VendorID"
                    value={header.VendorID || ''}
                    onChange={handleChangeForm}
                  ></input>
                </div>

                <div className="form-group col-md-4 col-lg-4">
                  <small>
                    {" "}
                    <label className="form-label">ShipMethodID </label>
                  </small>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    name="RevisionNumber"
                    placeholder=".ShipMethodID"
                    value={header.ShipMethodID || ''}
                    onChange={handleChangeForm}
                  ></input>
                </div>
              </div>
            </div>

            {/*-------- end form row---------*/}

            <div className="form-row col-md-6 col-md-12">
              {/*-------- form row---------*/}
              <div className="form-row col-md-12 col-lg-6">
                <div className="form-group col-md-4 col-lg-4">
                  <small>
                    <label className="form-label">OrderDate </label>
                  </small>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    name="OrderDate"
                    placeholder=".OrderDate"
                    value={header.OrderDate.split("T")[0] || ''}
                    onChange={handleChangeForm}
                  ></input>
                </div>

                <div className="form-group col-md-4 col-lg-4">
                  <small>
                    {" "}
                    <label className="form-label">ShipDate </label>
                  </small>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    name="ShipDate"
                    placeholder=".ShipDate"
                    value={header.ShipDate.split("T")[0] || ''}
                    onChange={handleChangeForm}
                  ></input>
                </div>

                <div className="form-group col-md-4 col-lg-4">
                  <small>
                    {" "}
                    <label className="form-label">SubTotal </label>
                  </small>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    name="SubTotal"
                    placeholder=".SubTotal"
                    value={header.SubTotal || ''}
                    onChange={handleChangeForm}
                  ></input>
                </div>
              </div>

              {/*-------- end form row---------*/}

              {/*-------- form row---------*/}
              <div className="form-row col-md-12 col-lg-6">
                <div className="form-group col-md-4 col-lg-4">
                  <small>
                    {" "}
                    <label className="form-label">TaxAmt </label>
                  </small>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    name="TaxAmt"
                    placeholder=".TaxAmt"
                    value={header.TaxAmt || ''}
                    onChange={handleChangeForm}
                  ></input>
                </div>

                <div className="form-group col-md-4 col-lg-4">
                  <small>
                    <label className="form-label">Freight </label>
                  </small>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    name="Freight"
                    placeholder=".Freight"
                    value={header.Freight || ''}
                    onChange={handleChangeForm}
                  ></input>
                </div>

                <div className="form-group col-md-4 col-lg-4">
                  <small>
                    {" "}
                    <label className="form-label">TotalDue </label>
                  </small>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder=".TotalDue"
                    name="TotalDue"
                    value={header.TotalDue || ''}
                    onChange={handleChangeForm}
                  ></input>
                </div>
              </div>
              <button type="button" className="btn btn-pink">
                Action
              </button>
            </div>

          </form>

          {/* <div>
          {details.map((data) => (<>
          <p>{data.PurchaseOrderDetailID}</p>
          <p>{data.DueDate}</p>
          <p>{data.OrderQty}</p>
          <p>{data.ProductID}</p>
          <p>{data.UnitPrice}</p>
          <p>{data.LineTotal}</p>
          <p>{data.ReceivedQty}</p>
          <p>{data.RejectedQty}</p>
          <p>{data.StockedQty}</p>
          <p>{data.ModifiedDate}</p>
          <p>------------------------------</p>
          </>
        ))}
          </div> */}
          {/*-------- end form row---------*/}
        </div>
      </div>
      <TableDetails details={details} />
    </React.Fragment>
  );
}
export default TableHeader;
