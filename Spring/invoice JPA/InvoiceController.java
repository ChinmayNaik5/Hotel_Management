package com.example.demo.mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class InvoiceController {
	
	@Autowired
	InvoiceService invoiceService;
	
	@GetMapping("/inv/{invid}")
	public Invoice getInvoice(@PathVariable String invid) {
		return invoiceService.getInvoice(Integer.parseInt(invid));
	}
	
	@PutMapping("/inv")
	public Invoice updateInvoice(@RequestBody Invoice invoice) {
		return invoiceService.updateInvoice(invoice);
	}
}
