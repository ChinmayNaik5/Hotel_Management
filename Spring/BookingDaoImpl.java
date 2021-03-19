package com.hotelmanagment.springboot.hotelmanagement.DAO;

import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.hotelmanagment.springboot.hotelmanagement.entity.Booking;

@Repository
public class BookingDaoImpl implements BookingDao  {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public Booking getBooking(int bookid) {
		Session currentSession=entityManager.unwrap(Session.class);
		Booking book=currentSession.get(Booking.class, bookid); 
		return book;
	}

	@Override
	public Booking addBooking(Booking book) {
		Session currentSession=entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(book);
		return book;
	}

}
