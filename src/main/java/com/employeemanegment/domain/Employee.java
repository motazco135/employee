package com.employeemanegment.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Employee extends BaseEntity implements Serializable {

	private static final long serialVersionUID = -7315586583692666423L;

	@Column(name = "name")
	private String name;

	@Column(name = "email")
	private String email;

	@Column(name = "mobile")
	private String mobile;


//	@JsonBackReference
//	@JoinColumn(name = "DEPT_ID")
//	@ManyToOne(fetch = FetchType.LAZY)
//	private Department department;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

//	public Department getDepartment() {
//		return department;
//	}
//
//	public void setDepartment(Department department) {
//		this.department = department;
//	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}



}
