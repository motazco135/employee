package com.employeemanegment.repos;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.employeemanegment.domain.Employee;

public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {
	
	@Query("select o from Employee o  where o.name like  %:empname%  ")
	List<Employee> findByUsername(@Param("empname") String empname);

}
