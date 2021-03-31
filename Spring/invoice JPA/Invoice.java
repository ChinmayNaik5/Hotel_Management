package com.example.demo.mypack;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Invoice {
	
	@Id
	int invoice_id;
	int booking_id;
	Date inv_date;
	int cust_id;
	String cust_name;
	long cust_contact;
	Date Check_in;
	Date check_out;
	int hotel_id ;
	float room_rate;
	float room_rent_amt;
	float other_charges;
	float total_bill_amt;
	String cust_address;
	public Invoice() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Invoice(int invoice_id, int booking_id, Date inv_date, int cust_id, String cust_name, long cust_contact,
			Date check_in, Date check_out, int hotel_id, float room_rate, float room_rent_amt, float other_charges,
			float total_bill_amt, String cust_address) {
		super();
		this.invoice_id = invoice_id;
		this.booking_id = booking_id;
		this.inv_date = inv_date;
		this.cust_id = cust_id;
		this.cust_name = cust_name;
		this.cust_contact = cust_contact;
		this.Check_in = check_in;
		this.check_out = check_out;
		this.hotel_id = hotel_id;
		this.room_rate = room_rate;
		this.room_rent_amt = room_rent_amt;
		this.other_charges = other_charges;
		this.total_bill_amt = total_bill_amt;
		this.cust_address = cust_address;
	}
	public int getInvoice_id() {
		return invoice_id;
	}
	public void setInvoice_id(int invoice_id) {
		this.invoice_id = invoice_id;
	}
	public int getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}
	public Date getInv_date() {
		return inv_date;
	}
	public void setInv_date(Date inv_date) {
		this.inv_date = inv_date;
	}
	public int getCust_id() {
		return cust_id;
	}
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public String getCust_name() {
		return cust_name;
	}
	public void setCust_name(String cust_name) {
		this.cust_name = cust_name;
	}
	public long getCust_contact() {
		return cust_contact;
	}
	public void setCust_contact(long cust_contact) {
		this.cust_contact = cust_contact;
	}
	public Date getCheck_in() {
		return Check_in;
	}
	public void setCheck_in(Date check_in) {
		Check_in = check_in;
	}
	public Date getCheck_out() {
		return check_out;
	}
	public void setCheck_out(Date check_out) {
		this.check_out = check_out;
	}
	public int getHotel_id() {
		return hotel_id;
	}
	public void setHotel_id(int hotel_id) {
		this.hotel_id = hotel_id;
	}
	public float getRoom_rate() {
		return room_rate;
	}
	public void setRoom_rate(float room_rate) {
		this.room_rate = room_rate;
	}
	public float getRoom_rent_amt() {
		return room_rent_amt;
	}
	public void setRoom_rent_amt(float room_rent_amt) {
		this.room_rent_amt = room_rent_amt;
	}
	public float getOther_charges() {
		return other_charges;
	}
	public void setOther_charges(float other_charges) {
		this.other_charges = other_charges;
	}
	public float getTotal_bill_amt() {
		return total_bill_amt;
	}
	public void setTotal_bill_amt(float total_bill_amt) {
		this.total_bill_amt = total_bill_amt;
	}
	public String getCust_address() {
		return cust_address;
	}
	public void setCust_address(String cust_address) {
		this.cust_address = cust_address;
	}
	@Override
	public String toString() {
		return "Invoice [invoice_id=" + invoice_id + ", booking_id=" + booking_id + ", inv_date=" + inv_date
				+ ", cust_id=" + cust_id + ", cust_name=" + cust_name + ", cust_contact=" + cust_contact + ", Check_in="
				+ Check_in + ", check_out=" + check_out + ", hotel_id=" + hotel_id + ", room_rate=" + room_rate
				+ ", room_rent_amt=" + room_rent_amt + ", other_charges=" + other_charges + ", total_bill_amt="
				+ total_bill_amt + ", cust_address=" + cust_address + "]";
	}
	
	
}
