package com.boot.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Transient;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;



@Entity
public class User implements UserDetails {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonView(UserView.WithoutPassword.class)
	private Long id;
	
	@JsonView(UserView.WithoutPassword.class)
	private String firstname;
	
	@JsonView(UserView.WithoutPassword.class)
	private String lastname;
		
	@JsonView(UserView.WithoutPassword.class)
	private String email;
	
	@JsonView(UserView.WithoutPassword.class)
	private String mobileNo;
	
	@JsonView(UserView.All.class)
	private String password;

	
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "USER_AUTHORITY",
        joinColumns = @JoinColumn(name = "USER_ID"),
        inverseJoinColumns = @JoinColumn(name = "AUTHORITY_ID"))
    @JsonView(UserView.WithoutPassword.class)
    private Set<Authority> userAuthorities = new HashSet<>();
	
	@Transient
	@JsonIgnore
	List<GrantedAuthority> roles = null;

		
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Authority> getUserAuthorities() {
		return userAuthorities;
	}

	public void setUserAuthorities(Set<Authority> userAuthorities) {
		this.userAuthorities = userAuthorities;
	}

	@Override
	@JsonIgnore
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		if(roles == null){
			roles = new ArrayList<GrantedAuthority>();
			for(Authority authority : userAuthorities){
				roles.add(new SimpleGrantedAuthority(authority.getName()));
			}
		}
		return roles;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

		

}
