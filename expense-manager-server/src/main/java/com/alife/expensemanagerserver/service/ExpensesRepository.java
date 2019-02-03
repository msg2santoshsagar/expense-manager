package com.alife.expensemanagerserver.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alife.expensemanagerserver.domain.ExpensesEntity;

public interface ExpensesRepository extends JpaRepository<ExpensesEntity, Long> {

}
