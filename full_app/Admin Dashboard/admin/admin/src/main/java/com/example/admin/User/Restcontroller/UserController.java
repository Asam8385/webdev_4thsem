package com.example.admin.User.Restcontroller;

import com.example.admin.Admin.Model.Question;
import com.example.admin.User.Model.User;
import com.example.admin.User.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@CrossOrigin(origins = "*",allowedHeaders = "*", exposedHeaders = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserServices userService;


    @GetMapping("/")
    public List<User> getUsers() {
        return userService.getAlluser();
    }


    @PostMapping("/")
    public User createQuestion(@RequestBody User user) {
        return userService.createUser(user);
    }


}
