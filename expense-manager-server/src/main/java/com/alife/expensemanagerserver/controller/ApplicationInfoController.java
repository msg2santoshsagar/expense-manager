package com.alife.expensemanagerserver.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alife.expensemanagerserver.domain.ApplicationConstant;

@RestController
@RequestMapping("/api")
public class ApplicationInfoController {

	Map<String,String> map = null;
	
	@PostConstruct
	void init(){
		if(map == null) {
			map = new HashMap<>();
			map.put("name", "Expense Manager Server");
			map.put("version", ApplicationConstant.VERSION);
			map.put("upTime", new Date().toString());
		}
	}
	
	@GetMapping("/ping")
	public Map<String,String> ping(){
		return map;
	}
}
