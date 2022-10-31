package com.application.digitalEducation.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class StudentAlreadyExistsException extends Exception {
    public StudentAlreadyExistsException() {
        super("There is a student with that username");
    }
}
