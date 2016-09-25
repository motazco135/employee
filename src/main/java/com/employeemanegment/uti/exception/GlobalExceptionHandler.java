package com.employeemanegment.uti.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice

public class GlobalExceptionHandler extends ResponseEntityExceptionHandler  {

	@Override
    protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers, HttpStatus status, WebRequest request) {
        return super.handleExceptionInternal(ex, body, headers, status, request);
    }

	 @ExceptionHandler(Exception.class)
    protected ResponseEntity<ErrorMessage> handleException(Exception e) {
        ErrorMessage errorMessage = new ErrorMessage();
        errorMessage.getErrors().add("ISS_E: "+e.toString()+" "+e.getMessage());
        errorMessage.setStatusCode(HttpStatus.CONFLICT.value());
        logger.error("REST Error handler", e);
        return new ResponseEntity<ErrorMessage>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
	
//	@ExceptionHandler(value = { IllegalArgumentException.class, IllegalStateException.class })
//	protected ResponseEntity<Object> handleConflict(RuntimeException ex, WebRequest request) {
//		String bodyOfResponse = "This should be application specific";
//		return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.CONFLICT, request);
//	}

}
