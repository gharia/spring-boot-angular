package com.boot.config;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.WebUtils;

import com.boot.config.security.AjaxAuthenticationFailureHandler;
import com.boot.config.security.AjaxAuthenticationSuccessHandler;
import com.boot.config.security.AjaxLogoutSuccessHandler;
import com.boot.config.security.AuthoritiesConstants;
import com.boot.config.security.CustomAccessDeniedHandler;
import com.boot.config.security.Http401UnauthorizedEntryPoint;

@Configuration
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Autowired
    private Http401UnauthorizedEntryPoint authenticationEntryPoint;
	
	@Autowired
    private AjaxAuthenticationSuccessHandler ajaxAuthenticationSuccessHandler;

	@Autowired
    private AjaxAuthenticationFailureHandler ajaxAuthenticationFailureHandler;

    @Autowired
    private AjaxLogoutSuccessHandler ajaxLogoutSuccessHandler;
    
    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
    	return new BCryptPasswordEncoder();
    }
    
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
            .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder());
    }
    
	@Override
	protected void configure(HttpSecurity http) throws Exception {		
		
		http
        	.csrf()
        	.csrfTokenRepository(csrfTokenRepository())
	    .and()
	        .addFilterAfter(csrfHeaderFilter(), CsrfFilter.class)
	        .exceptionHandling()
	        .accessDeniedHandler(new CustomAccessDeniedHandler())
	        .authenticationEntryPoint(authenticationEntryPoint)	    
	    .and()
	        .formLogin()
	        .loginProcessingUrl("/user/login")
	        .successHandler(ajaxAuthenticationSuccessHandler)
	        .failureHandler(ajaxAuthenticationFailureHandler)
	        .usernameParameter("j_username")
	        .passwordParameter("j_password")
	        .permitAll()
	    .and()
	        .logout()
	        .logoutUrl("/user/logout")
	        .invalidateHttpSession(true)
	        .logoutSuccessHandler(ajaxLogoutSuccessHandler)
	        .deleteCookies("JSESSIONID", "XSRF-TOKEN", "authenticated")
	        .permitAll()
	    .and()
	        .headers()
	        .frameOptions()
	        .disable()
	    .and()
	    	.authorizeRequests()
	    	.antMatchers("/index.html", "/home.html", "/login.html", "/", "/user/login").permitAll()
	    	.antMatchers("/**/admin/**").hasAuthority(AuthoritiesConstants.ADMIN)
	    	.anyRequest().authenticated();
		
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
	  web.ignoring().antMatchers("/assets/**");
	}

	private Filter csrfHeaderFilter() {
		return new OncePerRequestFilter() {
			@Override
			protected void doFilterInternal(HttpServletRequest request,
					HttpServletResponse response, FilterChain filterChain)
					throws ServletException, IOException {
				CsrfToken csrf = (CsrfToken) request.getAttribute(CsrfToken.class
						.getName());
				if (csrf != null) {
					Cookie cookie = WebUtils.getCookie(request, "XSRF-TOKEN");
					String token = csrf.getToken();
					if (cookie==null || token!=null && !token.equals(cookie.getValue())) {						
						cookie = new Cookie("XSRF-TOKEN", token);
						cookie.setMaxAge(-1);
			            cookie.setHttpOnly(false);
						cookie.setPath("/");
						response.addCookie(cookie);
					}
				}
				filterChain.doFilter(request, response);
			}
		};
	}

	private CsrfTokenRepository csrfTokenRepository() {
		HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
		repository.setHeaderName("X-XSRF-TOKEN");
		return repository;
	}
}
