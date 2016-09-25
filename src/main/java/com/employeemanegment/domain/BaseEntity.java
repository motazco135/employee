package com.employeemanegment.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@MappedSuperclass
public abstract class BaseEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", updatable = false, nullable = false)
	private Long id;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "LAST_UPDATE_TIMESTAMP")
	private Date lastUpdateTimestamp;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "Creation_TIMESTAMP")
	private Date creationTimestamp;
	
	
	@PreUpdate
	protected void onPreUpdate() {
		lastUpdateTimestamp =  new Date();
	}
	

	@PrePersist
	public void prePersist() {
	   creationTimestamp   = new Date(); 
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getLastUpdateTimestamp() {
		return lastUpdateTimestamp;
	}

	
	public Date getCreationTimestamp() {
		return creationTimestamp;
	}

	

}
