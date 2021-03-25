package com.vita.bookingCRUD.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vita.bookingCRUD.dao.BookingDao;
import com.vita.bookingCRUD.entity.Booking;

@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	private BookingDao bookingDao;

	@Override
	public Booking getBooking(int bookid) {
		List<Booking> list=bookingDao.findAll();
		Booking b1=null;
		for(Booking book:list) {
		if(book.getBooking_id()==bookid) {
			b1=book;
			break;
			}
	}
		return b1;
	}

	@Override
	public Booking addBooking(Booking book) {
		 bookingDao.save(book);
		 return book;
		
	}

}
