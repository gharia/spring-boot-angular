package com.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boot.model.Authority;
import com.boot.repository.AuthorityRepository;

@RestController
@RequestMapping("/authority")
public class AuthorityController {

	@Autowired
	private AuthorityRepository authorityRepository;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Authority> list(){		
		return authorityRepository.findAll();
	}
	
}
