package com.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.model.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {

}
