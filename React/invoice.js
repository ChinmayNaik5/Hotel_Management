import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './invoice.css'

function Invoice() {
    return (
        <div className="invoice_Bacground">
            <Container className="invoice_Container " >
                <Row>
                    <Col md={12}>
                        <h1 className="invoice_Title">Invoice</h1>
                    </Col>
                </Row>

                <Row>
                    <Col md={3} >
                    <h2>INDIAN HOMES</h2>
                New T2 Airport Link Road <br />
                Gulab Estate Office No 62 <br />
                Andheri,Mumbai 400072 <br />
                indanhomes@gmail.com <br />
                1234567890
                    </Col>
                    <Col md={{ span: 3, offset: 6 }}>
                    <h2>INDIAN HOMES</h2>
                New T2 Airport Link Road <br />
                Gulab Estate Office No 62 <br />
                Andheri,Mumbai 400072 <br />
                indanhomes@gmail.com <br />
                1234567890
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md={3}>
                        <span> Bill Date:</span>
                    </Col>
                    <Col md={{ span: 3, offset: 6 }}>
                    <p> Check-In Date:</p>
                    <span> Check-Out Date:</span>
                    </Col>
                    <hr/>
                    <Row>

                    </Row>
                </Row>
            </Container>
        </div>



    )
};

export default Invoice;

