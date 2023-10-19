package com.example.admin.Admin.Model;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface Questioner extends MongoRepository<Question, String> {






}
