import React from "react";
import "./purchases.css";

const Purchases =() => {
    return(
            <div class="container mt-5 purchases">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10">
                        <div class="rounded">
                            <h3 class="text-center mb-5">Orders History</h3>
                            <div class="table-responsive table-borderless">
                                <table class="table">
                                    <caption>Happy to serve you :)</caption>
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th>Order</th>
                                            <th>Company name</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                            <th>Created</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-body">
                                        <tr class="cell-1 table-success">
                                            <td class="text-center">1</td>
                                            <td>#13487</td>
                                            <td>Gasper Antunes</td>
                                            <td><span class="badge badge-success">Pending</span></td>
                                            <td>2674.00 EGP</td>
                                            <td>Today</td>
                                            <td><p>Delete</p></td>
                                        </tr>
                                        <tr class="cell-1 table-danger">
                                            <td class="text-center">2</td>
                                            <td>#13453</td>
                                            <td>Aartsen van</td>
                                            <td><span class="badge badge-danger">Shipped</span></td>
                                            <td>3454.00 EGP</td>
                                            <td>Yesterday</td>
                                            <td><p>Delete</p></td>
                                        </tr>
                                        <tr class="cell-1 table-warning">
                                            <td class="text-center">3</td>
                                            <td>#13498</td>
                                            <td>Trashes Habard</td>
                                            <td><span class="badge badge-warning">Completed</span></td>
                                            <td>6274.00 EGP</td>
                                            <td>May 12,2020</td>
                                            <td><p>Delete</p></td>
                                        </tr>
                                        <tr class="cell-1 table-warning">
                                            <td class="text-center">4</td>
                                            <td>#16499</td>
                                            <td>Samban Hubart</td>
                                            <td><span class="badge badge-warning">Completed</span></td>
                                            <td>6375.00 EGP</td>
                                            <td>May 11,2020</td>
                                            <td><p>Delete</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Purchases;