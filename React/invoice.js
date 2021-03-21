import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Invoice = () => {
    return (
        <div class="container cont1" style={{background:"url(/checkout.jpg)"}} >

            <div class="row">
                <div class="col-md-12">
                    <h1>Invoice</h1>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col-md-4">
                    <h2>INDIAN HOMES</h2>
                New T2 Airport Link Road <br />
                Gulab Estate Office No 62 <br />
                Andheri,Mumbai 400072 <br />
                indanhomes@gmail.com <br />
                1234567890
            </div>
                <div class="col-md-4 offset-md-4 div1" >
                    <label for="cutomeers details">
                        <h3>Billed to</h3>
                    </label><br />
                Chinmay Naik <br />
                Ultra Society,Shivaji Park, <br />
                Mahim,Mumbai 400016 <br />
                chinmaymaik@15gmail.com <br />
                9664761919
            </div>
            </div>
            <hr color="black" />
            <div class="row">
                <div class="col-md-4">
                    <div>Bill Date:07/02/2021</div>
                </div>
                <div class="col-md-4 offset-md-4 div2" >
                    <label for=" Check-In">Check-In date: 05/02/2021</label>
                    <label for=" Check-out">Check-out date:07/02/2021</label>
                </div>
            </div>
            <hr color="black" />
            <div class="row">
                <div class="col-sm-4">
                    <ul >
                        <li>Room Rent @ xx.x 	</li>
                        <li>Telephone charges</li>
                        <li>Laundry	</li>
                        <li>Food & Beverage 	</li>
                        <li>Car Rental</li><br />
                        <li>Cancellation Charges</li><br />
                        <li>Sub total</li> <br />
                        <li> VAT<li></li></li>
                        <li>Service Charge</li> <br /><br />
                        <li>Total</li>
                    </ul>
                </div>
                <div class="col-sm-4 offset-sm-4 div2" >
                    <ul >
                        <li>$ xxxxx.xx</li>
                        <li>$ xxxxx.xx</li>
                        <li>$ xxxxx.xx</li>
                        <li>$ xxxxx.xx</li>
                        <li>$ xxxxx.xx</li><br />
                        <li>$ xxxxx.xx</li><br />
                        <li>$ xxxxx.xx</li><br />
                        <li>$ xxxxx.xx</li>
                        <li>$ xxxxx.xx</li><br /><br />
                        <li>$ xxxxx.xx</li>
                    </ul>
                </div>
            </div>
            <br /><br /><br />
            <div class="row">
                <div class="col-md-12"  />
                <input type="button" name="p" value="Print" />
                <input type="button" name="e" value="Email" />
            </div>

        </div>
 
   
    )
};

export default Invoice;

