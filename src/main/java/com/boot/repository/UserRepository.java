package com.boot.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	public Optional<User> findOneByEmail(String email);
}
