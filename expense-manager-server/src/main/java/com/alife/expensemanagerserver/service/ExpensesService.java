package com.alife.expensemanagerserver.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alife.expensemanagerserver.domain.ExpensesEntity;

@Service
public class ExpensesService {

	@Autowired
	private ExpensesRepository expensesRepository;
	
	public List<ExpensesEntity> findAll(){
		return expensesRepository.findAll();
	}
	
	public ExpensesEntity save(ExpensesEntity expensesEntity) {
		return expensesRepository.save(expensesEntity);
	}
	
}
