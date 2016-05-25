package com.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.boot.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {	

	@Query("SELECT t FROM Task t LEFT JOIN FETCH t.createdBy WHERE t.id = (:taskId)")
	public Task findOneByIdFetchCreatedByEagerly(@Param("taskId") Long id);
}
