package com.application.digitalEducation.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Setter
@NoArgsConstructor
@Getter
@ToString
@Entity
@Table(name = "question_form")
public class QuestionForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "question", nullable = false)
    private String question;
    @ManyToOne()
    @JoinColumn(name = "student_id")
    private Student student;
}
