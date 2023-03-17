import React from "react";
import "./Payment.css";


const Payment =() => {

    return(
        <div class="paymentCard mt-50 mb-50">
            <div class="paymentNav">
                <ul class="mx-auto">
                    <li class="active"><a href="#">Payment</a></li>
                </ul>
            </div>
            <form>
                <span id="paymentCard-header">Saved cards:</span>
                <div class="row row-1">
                    <div class="col-2"><img class="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/></div>
                    <div class="col-7">
                        <p>**** **** **** 3193</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="#">Remove card</a>
                    </div>
                </div>
                <div class="row row-1">
                    <div class="col-2"><img  class="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png"/></div>
                    <div class="col-7">
                        <p>**** **** **** 4296</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="#">Remove card</a>
                    </div>
                </div>
                <span id="paymentCard-header">Add new card:</span>
                <div class="row-1">
                    <div class="row row-2">
                        <span id="card-inner">Card holder name</span>
                    </div>
                    <div class="row row-2">
                        <input type="text" placeholder="Bojan Viner" required></input>
                    </div>
                </div>
                <div class="row three">
                    <div class="col-7">
                        <div class="row-1">
                            <div class="row row-2">
                                <span id="card-inner">Card number</span>
                            </div>
                            <div class="row row-2">
                                <input type="number" placeholder="5134-5264-4" required></input>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <input type="text" placeholder="Exp. date" required></input>
                    </div>
                    <div class="col-2">
                        <input type="text" placeholder="CVV" required></input>
                    </div>
                </div>
                <button class="btn d-flex mx-auto">Add card</button>
            </form>
        </div>
    )
}
export default Payment;