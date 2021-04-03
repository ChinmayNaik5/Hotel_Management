package com.example.demo.mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceServiceImpl implements InvoiceService {

	@Autowired
	InvoiceDao invoiceDao;
	@Override
	public Invoice getInvoice(int invid) {
		
		return invoiceDao.findById(invid).get();
	}
	@Override
	public Invoice updateInvoice(Invoice invoice) {
		
		return invoiceDao.save(invoice);
	}

}
