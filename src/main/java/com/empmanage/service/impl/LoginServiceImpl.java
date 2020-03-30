package com.empmanage.service.impl;

import com.empmanage.dao.UserMapper;
import com.empmanage.pojo.User;
import com.empmanage.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public Boolean login(String username, String password) {
        User user = userMapper.findUserByUsernameAndPassword(username, password);
        if(user == null){
            return false;
        }
        return true;
    }

    @Override
    public User findUserByUP(String username, String password) {
        User user = userMapper.findUserByUsernameAndPassword(username, password);
        return user;
    }
}
