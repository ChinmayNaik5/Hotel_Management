package com.hotelmanagment.springboot.hotelmanagement.service;

import com.hotelmanagment.springboot.hotelmanagement.entity.Booking;

public interface BookingService {

	Booking getBooking(int bookid);

	Booking addBooking(Booking book);

}
