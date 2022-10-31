package com.application.digitalEducation.service;

import com.application.digitalEducation.dto.RegisterRequest;
import com.application.digitalEducation.entities.Student;
import com.application.digitalEducation.exceptions.StudentAlreadyExistsException;
import com.application.digitalEducation.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class StudentService {
    @Autowired
    StudentRepository repository;



    @Autowired
    EmailService emailService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student getStudentById(int id) {
        return repository.findById(id).get();
    }

    public Student insertStudent(Student student) throws StudentAlreadyExistsException {
        if (repository.findByEmail(student.getEmail()).isPresent()) {
            throw new StudentAlreadyExistsException();
        }
        Student newStudent = new Student();
        newStudent.setEmail(student.getEmail());
        newStudent.setFirstName(student.getFirstName());
        newStudent.setLastName(student.getLastName());
        newStudent.setPassword(bCryptPasswordEncoder.encode(student.getPassword()));
        newStudent.setActive(true);

        repository.save(newStudent);

        RegisterRequest registerRequest = new RegisterRequest();
        registerRequest.setName(newStudent.getFirstName() + " " + newStudent.getLastName());
        registerRequest.setTo(newStudent.getEmail());
        registerRequest.setSubject("Confirm registration");

        Map<String, Object> model = new HashMap<>();
        model.put("Name", registerRequest.getName());
        model.put("Email", registerRequest.getTo());
        model.put("token", UUID.randomUUID().toString());

        System.out.println("send email");
        emailService.sendConfirmationEmail(registerRequest, model);
        System.out.println("email sent");
        return newStudent;
    }

    public String confirmToken(String token) {
        return "confirmed";
    }

    public Student updateStudent(Student employee) {
        Student student1 = repository.findById(employee.getId()).get();
        student1.setPassword(employee.getPassword());
        return repository.save(student1);
    }

    public Student deleteStudentById(Integer id) {
        Student student1 = repository.findById(id).get();
        repository.deleteById(id);
        return student1;
    }

    public Optional<Student> getStudentByEmail(String email) {
        return repository.findByEmail(email);
    }
}
