package com.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boot.model.Task;
import com.boot.repository.TaskRepository;

@RestController
@RequestMapping("/task")
public class TaskController {
	
	@Autowired
	private TaskRepository taskRepository;

	@RequestMapping(method = RequestMethod.GET)
	public List<Task> list(){		
		return taskRepository.findAll();		
	}
	
	@RequestMapping(value="/admin/save", method = RequestMethod.POST)
	public Task save(@RequestBody Task task){
		return taskRepository.saveAndFlush(task);
	}
	
	@RequestMapping(value = "/show/{id}", method = RequestMethod.GET)
	public Task show(@PathVariable Long id){
		return taskRepository.findOneByIdFetchCreatedByEagerly(id);	
	}
		
	@RequestMapping(value = "/admin/delete/{id}", method = RequestMethod.DELETE)
	public Task delete(@PathVariable Long id){
		Task existingTask = taskRepository.findOne(id);
		taskRepository.delete(existingTask);
		return existingTask;
	}

}
