package com.alife.expensemanagerserver.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="expenses")
public class ExpensesEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private Date date;
	private String paymentMode;
	private String items;
	private Double total;
	private String remarks;
	private Boolean verified;
	
	
}
