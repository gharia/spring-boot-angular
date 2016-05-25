package com.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boot.model.User;
import com.boot.model.UserView;
import com.boot.repository.UserRepository;
import com.boot.service.UserService;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserService userService;

	@RequestMapping(method = RequestMethod.GET)
	public List<User> list(){		
		return userRepository.findAll();		
	}
	
	@RequestMapping(value="/admin/save", method = RequestMethod.POST)
	public User save(@RequestBody User user){
		return userService.save(user);		
	}
	
	@JsonView(UserView.WithoutPassword.class)
	@RequestMapping(value = "/show/{id}", method = RequestMethod.GET)
	public User show(@PathVariable Long id){
		return userRepository.findOne(id);
	}
		
	@RequestMapping(value = "/admin/delete/{id}", method = RequestMethod.DELETE)
	public User delete(@PathVariable Long id){
		User existingUser = userRepository.findOne(id);
		userRepository.delete(existingUser);
		return existingUser;
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public User user() {
		Authentication authentication =	SecurityContextHolder.getContext().getAuthentication();		
		User user = (User) (authentication == null ? null : authentication.getPrincipal());
		return user;
	}
}
