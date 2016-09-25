package com.employeemanegment.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;


@Entity
public class Department  extends  BaseEntity  implements Serializable {

	
	private static final long serialVersionUID = 2294074270202383679L;

	  
	  @Column
	  private String departmentName;
	  
	  @Column
	  private String departmentExt;
	  
	  @Column
	  private String departmentRoomNum;
	  
//	  @JsonIgnore
//	  @JsonManagedReference
//	  @OneToMany(fetch = FetchType.LAZY , mappedBy = "department"  )
//	  private List<Employee> employeeCollection;

	  public Department (String departmentName  , String departmentExt  , String  departmentRoomNum){
		  this.departmentName = departmentName;
		  this.departmentExt = departmentExt; 
		  this.departmentRoomNum = departmentRoomNum ;  
	  
	  }

	  public Department (){
		  
	  }
	  
//	public Collection<Employee> getEmployeeCollection() {
//		return employeeCollection;
//	}
//
//	public void setEmployeeCollection(List<Employee> employeeCollection) {
//		this.employeeCollection = employeeCollection;
//	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public String getDepartmentExt() {
		return departmentExt;
	}

	public void setDepartmentExt(String departmentExt) {
		this.departmentExt = departmentExt;
	}

	public String getDepartmentRoomNum() {
		return departmentRoomNum;
	}

	public void setDepartmentRoomNum(String departmentRoomNum) {
		this.departmentRoomNum = departmentRoomNum;
	}
	  
	  

}
