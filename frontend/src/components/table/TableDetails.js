import React from "react";

function TableDetails(detailsPurchase) {

    const submitHandle = () => {
        alert("hola");
    }

    const {details} = detailsPurchase;

    return (
        <React.Fragment>
            <div className="card mt-3 col-md-8 mx-auto">
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title title-table">Detalles</h5>
                        <form className="form-group form-inline ml-3">
                            <div className="input-group">
                                <input type="text" className=" search-input form-control" placeholder="Buscar..."></input>
                                <div className="input-group-append">
                                    <button onClick={submitHandle} className="btn btn-pink" type="button">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Orden #</th>
                                <th>Vence</th>
                                <th>OrderQty</th>
                                <th>Id Prod. </th>
                                <th>Precio C/U</th>
                                <th>Total</th>
                                <th>Cant. Recibida</th>
                                <th>Cant. Rechazada</th>
                                <th>En Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map((data) => (
                                <tr>
                                    <p>{data.PurchaseOrderDetailID}</p>
                                    <td>{data.DueDate.split("T")[0]}</td>
                                    <td>{data.OrderQty}</td>
                                    <td>{data.ProductID}</td>
                                    <td>{data.UnitPrice}</td>
                                    <td>{data.LineTotal}</td>
                                    <td>{data.ReceivedQty}</td>
                                    <td>{data.RejectedQty}</td>
                                    <td>{data.StockedQty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}
export default TableDetails;