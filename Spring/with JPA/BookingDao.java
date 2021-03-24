package com.vita.bookingCRUD.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vita.bookingCRUD.entity.Booking;
@Repository
public interface BookingDao extends JpaRepository<Booking, Integer> {


}
