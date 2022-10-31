package com.application.digitalEducation.service;

import com.application.digitalEducation.dto.StudentDetails;
import com.application.digitalEducation.entities.Student;
import com.application.digitalEducation.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentDetailsService implements UserDetailsService {

    @Autowired
    StudentService studentService;

    @Autowired
    StudentRepository studentRepository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Student> student = studentService.getStudentByEmail(email);

        student.orElseThrow(() -> new UsernameNotFoundException("Not found: " + email));

        return student.map(StudentDetails::new).get();
    }
}
