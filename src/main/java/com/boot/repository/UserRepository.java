package com.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
