package com.vita.bookingCRUD.service;

import com.vita.bookingCRUD.entity.Booking;

public interface BookingService {

	Booking getBooking(int bookid);

	Booking addBooking(Booking book);

}
