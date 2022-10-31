package com.application.digitalEducation.controller;

import com.application.digitalEducation.entities.QuestionForm;
import com.application.digitalEducation.service.QuestionFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/questions")
public class QuestionFormController {

    @Autowired
    QuestionFormService questionFormService;

    @PostMapping("")
    @ResponseBody
    public QuestionForm insertQuestion(@RequestBody QuestionForm questionForm){
        System.out.println("mail controller");
        return questionFormService.insertQuestion(questionForm);
    }
}
