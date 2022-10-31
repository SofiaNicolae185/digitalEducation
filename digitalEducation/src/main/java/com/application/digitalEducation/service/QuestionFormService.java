package com.application.digitalEducation.service;


import com.application.digitalEducation.dto.QuestionFormCardStudent;
import com.application.digitalEducation.entities.QuestionForm;
import com.application.digitalEducation.entities.Student;
import com.application.digitalEducation.repositories.QuestionFormRepository;
import com.application.digitalEducation.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionFormService {

    @Autowired
    EmailService emailService;

    @Autowired
    QuestionFormRepository questionFormRepository;
    @Autowired
    StudentService studentService;

    public QuestionForm insertQuestion(QuestionForm questionForm) {
        System.out.println("insert");
        QuestionForm newQuestionForm = new QuestionForm();

        Student student = new Student();
        student = studentService.getStudentById(questionForm.getStudent().getId());
        System.out.println(questionForm.getStudent().getId());

        newQuestionForm.setQuestion(questionForm.getQuestion());
        newQuestionForm.setStudent(questionForm.getStudent());

        QuestionFormCardStudent questionFormCardStudent = buildQuestionCardRequest(student);
        questionFormCardStudent.setSubject("Your question has been received!");
        emailService.sendEmailToStudent(questionFormCardStudent, "question-received-student.flt");
        System.out.println("mail sended to student");

        emailService.sendEmailToTrainer(questionFormCardStudent,"question-received-trainer.flt");
        System.out.println("mail sended to trainer");

        return questionFormRepository.save(newQuestionForm);
    }

    static QuestionFormCardStudent buildQuestionCardRequest(Student student) {
        QuestionFormCardStudent questionFormCardStudent = new QuestionFormCardStudent();

        questionFormCardStudent.setFirstName(student.getFirstName());
        questionFormCardStudent.setLastName(student.getLastName());
        questionFormCardStudent.setStudentEmail(student.getEmail());

        return questionFormCardStudent;
    }
}
