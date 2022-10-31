package com.application.digitalEducation.controller;

import com.application.digitalEducation.configuration.security.UserSession;
import com.application.digitalEducation.dto.LoginForm;
import com.application.digitalEducation.entities.Student;
import com.application.digitalEducation.exceptions.StudentAlreadyExistsException;
import com.application.digitalEducation.service.StudentService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/students")
public class StudentController {


    @Autowired
    StudentService studentService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserSession userSession;



    @CrossOrigin
    @GetMapping("/{id}")
    @ResponseBody
    public Student getStudentById(@PathVariable(name = "id") Integer sid) {
        return studentService.getStudentById(sid);
    }

    @CrossOrigin
    @PostMapping("/register")
    @ResponseBody
    public Student insertStudent(@RequestBody Student student) throws StudentAlreadyExistsException {
        return studentService.insertStudent(student);
    }

    @CrossOrigin
    @GetMapping("/register/confirm")
    @ResponseBody
    public String confirm(@RequestParam("token") String token) {
        return studentService.confirmToken(token);
    }

    @CrossOrigin
    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginForm, HttpServletRequest request) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginForm.getEmail(), loginForm.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        Student user = studentService.getStudentByEmail(loginForm.getEmail()).get();

        JSONObject obj = new JSONObject();
        obj.put("id", user.getId());

        return ResponseEntity.ok(obj);
    }

    @CrossOrigin
    @GetMapping("/logout")
    @ResponseBody
    public ResponseEntity logout(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws ServletException {
        httpServletRequest.logout();        //session.end()
        return ResponseEntity.status(HttpStatus.OK).body("Successful logout");
    }

    @CrossOrigin
    @PutMapping("/{id}")
    @ResponseBody
    public Student updateStudent(@PathVariable(name = "id") Integer sid, @RequestBody Student student) {
        student.setId(sid);
        return studentService.updateStudent(student);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    @ResponseBody
    public Student deleteStudentById(@PathVariable(name = "id") Integer sid) {
        return studentService.deleteStudentById(sid);
    }

}
