package com.example.admin.Admin.Restcontroller;

import com.example.admin.Admin.Model.Question;
import com.example.admin.Admin.Services.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/")
public class QuestionController {

    @Autowired
    private Services QuestionService;


    @GetMapping("/api/questions")
    public List<Question> getAllQuestion() {
        return QuestionService.getAllQuestions();
    }

    @GetMapping("/demo")
    public int getAllUsersdemo() {
        return 3;
    }

    @PostMapping("/api/questions")
    public Question createQuestion(@RequestBody Question que) {
        return QuestionService.createQuestions(que);
    }

    @PutMapping("/api/questions/{id}")
    public ResponseEntity<?> updateQuestion(@PathVariable String id, @RequestBody Question updatedQuestion) {
        try {
            Question existingQuestion = QuestionService.getQuestionById(id);
            if (existingQuestion == null) {
                return ResponseEntity.notFound().build();
            }
            // Update the fields of the existing question with the data from updatedQuestion
            existingQuestion.setTitle(updatedQuestion.getTitle());
            existingQuestion.setAnswer(updatedQuestion.getAnswer());
            // Update other fields as needed
            QuestionService.saveQuestion(existingQuestion); // Save the updated question
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating question");
        }
    }

    // Delete a question
    @DeleteMapping("/api/questions/{id}")
    public ResponseEntity<?> deleteQuestion(@PathVariable String id) {
        try {
            Question question = QuestionService.getQuestionById(id);
            if (question == null) {
                return ResponseEntity.notFound().build();
            }
            QuestionService.deleteQuestion(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting question");
        }
    }




}
