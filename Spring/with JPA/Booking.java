package com.vita.bookingCRUD.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int booking_id;
	private Date check_in;
	private Date check_out;
	private int cust_id;
	private Date booking_date;
	private int hotel_id;
	private String cust_name;
	private long cust_contact;
	private int  cust_age;
	private String cust_email_id;
	private int no_rooms;
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Booking(int booking_id, Date check_in, Date check_out, int cust_id, Date booking_date, int hotel_id,
			String cust_name, long cust_contact, int cust_age, String cust_email_id, int no_rooms) {
		super();
		this.booking_id = booking_id;
		this.check_in = check_in;
		this.check_out = check_out;
		this.cust_id = cust_id;
		this.booking_date = booking_date;
		this.hotel_id = hotel_id;
		this.cust_name = cust_name;
		this.cust_contact = cust_contact;
		this.cust_age = cust_age;
		this.cust_email_id = cust_email_id;
		this.no_rooms = no_rooms;
	}
	public int getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}
	public Date getCheck_in() {
		return check_in;
	}
	public void setCheck_in(Date check_in) {
		this.check_in = check_in;
	}
	public Date getCheck_out() {
		return check_out;
	}
	public void setCheck_out(Date check_out) {
		this.check_out = check_out;
	}
	public int getCust_id() {
		return cust_id;
	}
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public Date getBooking_date() {
		return booking_date;
	}
	public void setBooking_date(Date booking_date) {
		this.booking_date = booking_date;
	}
	public int getHotel_id() {
		return hotel_id;
	}
	public void setHotel_id(int hotel_id) {
		this.hotel_id = hotel_id;
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
	public int getCust_age() {
		return cust_age;
	}
	public void setCust_age(int cust_age) {
		this.cust_age = cust_age;
	}
	public String getCust_email_id() {
		return cust_email_id;
	}
	public void setCust_email_id(String cust_email_id) {
		this.cust_email_id = cust_email_id;
	}
	public int getNo_rooms() {
		return no_rooms;
	}
	public void setNo_rooms(int no_rooms) {
		this.no_rooms = no_rooms;
	}
	@Override
	public String toString() {
		return "Booking [booking_id=" + booking_id + ", check_in=" + check_in + ", check_out=" + check_out
				+ ", cust_id=" + cust_id + ", booking_date=" + booking_date + ", hotel_id=" + hotel_id + ", cust_name="
				+ cust_name + ", cust_contact=" + cust_contact + ", cust_age=" + cust_age + ", cust_email_id="
				+ cust_email_id + ", no_rooms=" + no_rooms + "]";
	}
	
}
