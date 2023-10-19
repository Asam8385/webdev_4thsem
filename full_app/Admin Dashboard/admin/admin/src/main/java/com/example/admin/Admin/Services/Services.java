package com.example.admin.Admin.Services;

import com.example.admin.Admin.Model.Question;
import com.example.admin.Admin.Model.Questioner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Services {

        @Autowired
        private Questioner QuesRepository;

        public List<Question> getAllQuestions() {
            return QuesRepository.findAll();
        }

        public Question createQuestions(Question Ques) {
            return QuesRepository.save(Ques);
        }

    public Question getQuestionById(String id) {
        return QuesRepository.findById(id).orElse(null);
    }

    public void deleteQuestion(String id) {
        QuesRepository.deleteById(id);
    }

    public void saveQuestion(Question existingQuestion) {
        QuesRepository.save(existingQuestion);
    }

    // Add more service methods


}
