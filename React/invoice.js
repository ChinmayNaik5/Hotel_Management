import React, { useEffect, useState } from 'react';
import { Col, Container, Row, ButtonGroup,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './invoice.css'

function Invoice() {
    const [invoice, setInvoice] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/inv/1")
            .then(res => res.json())
            .then(result => { setInvoice(result); })
    }, [invoice.id]);


    return (
        <div className="invoice_Bacground">
            <br/><br/><br/><br/><br/>
            <Container className="invoice_Container " >
                <Row>
                    <Col md={12}>
                        <h1 className="invoice_Title">Invoice</h1>
                    </Col>
                </Row >
                <Row className="text-center">
                    <Col md={{ span: 10, offset: 1 }} >
                        <span>| INDIAN HOMES | address:New T2 Airport Link Road,Gulab Estate, Office No 62, Andheri, Mumbai - 400072 | email:indanhomes@gmail.com | contact no:1234567890 | </span>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={4}>
                        <span>Booking Ref. No. : <span className="span_data">{invoice.booking_id}</span></span><br />
                        <span>Name :<span className="span_data">{invoice.cust_name}</span></span><br />
                        <span>Address :<span className="span_data">{invoice.cust_address}</span></span><br />
                        <span>E-mail :<span className="span_data"></span></span><br />
                        <span>Contact : <span className="span_data">{invoice.cust_contact}</span></span><br />
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span>Invoice Id:<span className="span_data">{invoice.invoice_id}</span></span><br />
                        <span>Bill Date:<span className="span_data">{invoice.inv_date}</span></span>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={4}>
                        <span>Check-In:<span className="span_data">{invoice.check_in}</span></span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span> Check-Out:<span className="span_data">{invoice.check_out}</span></span>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={4}>
                        <span >Room Rate(per night)</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span>₹ {invoice.room_rate}</span>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <span>Room Rent</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span>₹ {invoice.room_rent_amt}</span>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <span>Other Charges</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span>₹ {invoice.other_charges}</span>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col md={4}>
                        <span>Cancellation Charges</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span>₹  0000.00</span>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={4}>
                        <span>Sub Total</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span>₹ </span>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={4}>
                        <span>VAT</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span>₹ </span>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <span>Service Charges</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span>₹</span>
                        <hr/>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={4}>
                        <span className="span_data">Total</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span className="span_data">₹ {invoice.total_bill_amt}</span>
                    </Col>
                </Row>
               <br/><br/><br/> <br/><br/>
                <Row className="text-center">
                    <Col md={{ span: 4, offset: 4 }}>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary">print</Button>&nbsp;
                            <Button variant="secondary">e-mail</Button>
                        </ButtonGroup>

                    </Col>
                </Row>
                <br/><br/>
            </Container>
            <br/><br/><br/><br/><br/>
        </div>
    )
};

export default Invoice;

