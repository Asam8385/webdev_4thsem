package com.example.admin.Admin.Model;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "AllQuestions")
public class Question {

    @Id
    public ObjectId id;
    public  String option;
    public String title;
    public String description;
    public String answer;


    public String getOption() {
        return option;
    }

    public void setOption(String option) {
        this.option = option;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId Id) {
        this.id = Id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }



}
