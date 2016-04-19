package com.boot.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boot.model.User;
import com.boot.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;

	@RequestMapping(method = RequestMethod.GET)
	public List<User> list(){		
		return userRepository.findAll();		
	}
	
	@RequestMapping(value="/save", method = RequestMethod.POST)
	public User save(@RequestBody User user){
		return userRepository.saveAndFlush(user);
	}
	
	@RequestMapping(value = "/show/{id}", method = RequestMethod.GET)
	public User show(@PathVariable Long id){
		return userRepository.findOne(id);
	}
		
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public User delete(@PathVariable Long id){
		User existingUser = userRepository.findOne(id);
		userRepository.delete(existingUser);
		return existingUser;
	}
}
