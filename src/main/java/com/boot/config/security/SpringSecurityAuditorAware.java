package com.boot.config.security;

import com.boot.model.User;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

/**
 * Implementation of AuditorAware based on Spring Security.
 */
@Component
public class SpringSecurityAuditorAware implements AuditorAware<User> {

    @Override
    public User getCurrentAuditor() {
    	Authentication authentication =	SecurityContextHolder.getContext().getAuthentication();
		System.out.println("****Principal Object : " + authentication.getPrincipal());
		User user = (User) (authentication == null ? null : authentication.getPrincipal());
        return user;
    }
}
