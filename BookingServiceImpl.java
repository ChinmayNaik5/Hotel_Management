package com.hotelmanagment.springboot.hotelmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.hotelmanagment.springboot.hotelmanagement.DAO.BookingDao;
import com.hotelmanagment.springboot.hotelmanagement.entity.Booking;

@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	BookingDao bookingDao; 

	@Override
	@Transactional
	public Booking getBooking(int bookid) {
		return bookingDao.getBooking(bookid);
	}

	@Override
	@Transactional
	public Booking addBooking(Booking book) {
		 return bookingDao.addBooking(book);
		
	}

}
