package com.hotelmanagment.springboot.hotelmanagement.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.hotelmanagment.springboot.hotelmanagement.entity.Booking;
import com.hotelmanagment.springboot.hotelmanagement.service.BookingService;

@RestController
@CrossOrigin
public class BookingController {
	
	@Autowired
	private BookingService bookingService; 
	
	@GetMapping("/book/{bookid}")
	public Booking getBooking(@PathVariable String bookid) {
		return this.bookingService.getBooking(Integer.parseInt(bookid));
	}
	@PostMapping("/book")
	public Booking addBooking(@RequestBody Booking book) {
		return bookingService.addBooking(book);
	}
}
