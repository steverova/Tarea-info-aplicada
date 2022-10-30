import React from "react";

function TableDetails() {

    return (
        <React.Fragment>
            <div class="card mt-3 col-md-8 mx-auto">
                <div class="card-body">
                    <div className="d-flex">
                        <h5 class="card-title title-table">Detalles</h5>
                        <form class="form-group form-inline ml-3">
                            <div class="input-group">
                                <input type="text" class=" search-input form-control" placeholder="Buscar..."></input>
                                <div class="input-group-append">
                                    <button class="btn btn-pink" type="button">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="row">
                        <div class="card m-1" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <p>PurchaseOrderDetailID: 53</p>
                                <p>DueDate: 2011-12-29</p>
                                <p>OrderQty: 550</p>
                                <p>ProductID: 355</p>
                                <p>UnitPrice: 1.365</p>
                                <p>LineTotal: 750.75</p>
                                <p>ReceivedQty: 550.0</p>
                                <p>RejectedQty: 0.0</p>
                                <p>StockedQty: 550.0</p>
                                <p>ModifiedDate: 2011-12-22</p>
                            </div>
                        </div>

                        <div class="card m-1" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>

                        <div class="card m-1" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </React.Fragment>
    );
}
export default TableDetails;