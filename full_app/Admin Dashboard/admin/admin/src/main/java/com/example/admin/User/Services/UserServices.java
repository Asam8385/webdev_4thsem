package com.example.admin.User.Services;

import com.example.admin.User.Model.Iuser;
import com.example.admin.User.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServices {

    @Autowired
    private Iuser userRepo;

    public List<User> getAlluser() {
        return userRepo.findAll();
    }

    public User createUser(User user) {
        return userRepo.save(user);
    }

    public User getUserById(String id) {
        return userRepo.findById(id).orElse(null);
    }

    public void deleteUser(String id) {
        userRepo.deleteById(id);
    }

    public void saveUser(User user) {
        userRepo.save(user);
    }


}
