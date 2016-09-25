package com.employeemanegment.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employeemanegment.domain.Employee;
import com.employeemanegment.repos.EmployeeRepository;

@RestController
@RequestMapping("/employee")
public class EmployeeRestController {
	
	
	
	private static final Logger logger = LoggerFactory.getLogger(EmployeeRestController.class);

	@Autowired
	private EmployeeRepository employeeRepository;
	
	/**
	 * Create new Employee in the DB table department
	 * @return Department Obj
	 */
	@RequestMapping(value = "/save", method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
	public Employee saveEmployee(@RequestBody Employee emp ) {
		logger.info("start  create Department ..."); 
		emp = employeeRepository.save(emp);
		logger.info(" Created Department  ID  ..." + emp.getId());
		return emp;
	}
	
	/**
	 * Create new Employee in the DB table department
	 * @return  List<Employee>
	 */
	@RequestMapping(value = "/search", method = RequestMethod.GET , consumes = MediaType.APPLICATION_JSON_VALUE)
	public List<Employee> searchByName(@RequestParam String empname) {
		logger.info("Search in Employee ..."); 
		List<Employee> emp  = employeeRepository.findByUsername(empname);
		logger.info(" Employee List  ..." + emp.size());
		return emp;
	}
	
	/**
	 * delete  Employee in the DB table department
	 */
	@RequestMapping(value = "/delete/{empID}" ,method = RequestMethod.DELETE )
	public void deleteEmp( @PathVariable("empID") long empID) {
		logger.info("start  Delete Department ..."); 
		employeeRepository.delete(empID);
		logger.info(" Employee deleted ID ..." + empID);
	}
	

}
