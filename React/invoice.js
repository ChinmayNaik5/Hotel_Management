import React, { useEffect, useState,useRef } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import Moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './invoice.css'

function Invoice() {
    const [invoice, setInvoice] = useState([]);
    const [date, setDate] = useState();
    const [date1, setDate1] = useState(invoice.check_in);
    const [vat, setVat] = useState();
    const [subtotal, setSubtotal] = useState();
    const [serviceCharge, setServiceCharge] = useState();
    const [total, setTotal] = useState();
    const [charges,setChaerges]=useState();
    const [save,setsave]=useState(false);
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


    function getdata(event) {
        let a = event.target.value;
        setChaerges(a);
        let b = invoice.room_rent_amt;
        let c = (parseFloat(a) + parseFloat(b)).toFixed(2);
        let d = (c * 5 / 100).toFixed(2);
        let e = (c * 3 / 100).toFixed(2);
        let f = (parseFloat(c) + parseFloat(d) + parseFloat(e)).toFixed(2);
        setSubtotal(c);
        setVat(d);
        setServiceCharge(e)
        setTotal(f);
        invoice.check_out=date;
        invoice.other_charges= a;
        invoice.total_bill_amt=f;
        setsave(true);
    }

    
   


    function postData(){
        let demo = JSON.stringify(invoice);
        fetch("http://localhost:8080/inv", {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: demo
        });
        setsave(false);
    }
    


    useEffect(() => {
        fetch("http://localhost:8080/inv/1")
            .then(res => res.json())
            .then(result => {
                setInvoice(result);
                console.log(result);
            })
           
            
            
    }, []);


   /* function CheckInDate(){
        setDate(Moment(date1).format('YYYY-MM-DD'));
                       setDate1(Moment(new date()).format('YYYY-MM-DD'));}*/
    
    function pad2(n) {
        return (n < 10 ? '0' : '') + n;
      }



    useEffect(() => {
        let today = new Date();
        let todaydate = today.getFullYear() + '-' + pad2(today.getMonth() +1) + '-' +  pad2(today.getDate())    ;
        setDate(todaydate);
    }, [])

    return (
        <div className="invoice_Bacground" >
            <br /><br /><br /><br /><br />
            <Container className="invoice_Container " ref={componentRef} >
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
                        <span>Booking Ref. No. : <span className="span_data" >{invoice.booking_id}</span></span><br />
                        <span>Name :<span className="span_data">{invoice.cust_name}</span></span><br />
                        <span>Address :<span className="span_data">{invoice.cust_address}</span></span><br />
                        <span>E-mail :<span className="span_data"></span></span><br />
                        <span>Contact : <span className="span_data">{invoice.cust_contact}</span></span><br />
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span>Invoice Id:<span className="span_data" >{invoice.invoice_id}</span></span><br />
                        <span>Bill Date:<span className="span_data">{date}</span></span>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={4}>
                        <span>Check-In:<span className="span_data" >{invoice.check_in}</span></span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <span> Check-Out:<span className="span_data">{date}</span></span>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={4}>
                        <span >Room Rate </span>
                        
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                    <input  value={invoice.room_rate} className="input" readOnly></input>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <span>Room Rent</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <input value={invoice.room_rent_amt} className="input" readOnly></input>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <span>Other Charges</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <input value={charges} placeholder="enter charges here else put 0" className="input" onChange={getdata}></input>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col md={4}>
                        <span>Cancellation Charges</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <input value="0000.00" className="input" readOnly></input>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={4}>

                        <span>Sub-Total</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <input value={subtotal} className="input" readOnly></input>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={4}>
                        <span>VAT (5% of Sub-Total)</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <input value={vat} className="input" readOnly></input>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <span >Service Charges (3% of Sub-Total)</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <input value={serviceCharge} className="input" readOnly></input>
                        <hr />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={4}>
                        <span className="span_data">Total</span>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <input value={total} className="input span_data" readOnly></input>
                    </Col>
                </Row>
                <br /><br /><br /> <br /><br />
                <Row className="text-center">
                    <Col md={{ span: 4, offset: 4 }}>
                      {save ? <Button variant="outline-primary" onClick={postData}>save</Button> :
                             <div>
                                 <Button variant="outline-primary" onClick={handlePrint}>print</Button>
                            <Button variant="outline-primary">e-mail</Button>
                             </div>  
                            }
                    </Col>
                </Row>
                <br /><br />
            </Container>
            <br /><br /><br /><br /><br />
        </div>
    )
};

export default Invoice;

