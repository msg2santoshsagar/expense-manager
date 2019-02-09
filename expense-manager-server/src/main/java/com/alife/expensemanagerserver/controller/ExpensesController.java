package com.alife.expensemanagerserver.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alife.expensemanagerserver.domain.ExpensesEntity;
import com.alife.expensemanagerserver.service.ExpensesService;

@RestController
@RequestMapping("/api/expenses")
public class ExpensesController {

	@Autowired
	private ExpensesService expenseService;
	
	@GetMapping
	public List<ExpensesEntity> get(){
		return expenseService.findAll();
	}
	
//	@PostMapping
//	public ExpensesEntity post(@RequestBody ExpensesEntity expensesEntity) {
//		return expenseService.save(expensesEntity);
//	}
	
	@PostMapping
	public List<ExpensesEntity> post(@RequestBody List<ExpensesEntity> expensesEntity) {
		return expenseService.save(expensesEntity);
	}
	
	@PostConstruct
	void init() {
		ExpensesEntity e = new ExpensesEntity();
		e.setDate(new Date());
		e.setItems("Vegetable");
		e.setPaymentMode("CASH");
		e.setTotal(505.10);
		e.setRemarks("Fresh Vegetable");
		e.setVerified(true);
		List<ExpensesEntity> l = new ArrayList<>();
		l.add(e);
		post(l);
	}
	
}
