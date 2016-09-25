package com.employeemanegment.repos;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.employeemanegment.domain.Department;

public interface DepartmentRepository extends PagingAndSortingRepository<Department, Long> {

}
