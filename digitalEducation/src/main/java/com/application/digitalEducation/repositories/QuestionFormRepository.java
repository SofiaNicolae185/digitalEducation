package com.application.digitalEducation.repositories;


import com.application.digitalEducation.entities.QuestionForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionFormRepository extends JpaRepository<QuestionForm, Integer> {
}
