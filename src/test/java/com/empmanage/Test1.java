package com.empmanage;

import com.empmanage.dao.UserMapper;
import com.empmanage.pojo.User;
import com.empmanage.service.LoginService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Test1 {

    @Autowired
    private LoginService loginService;
    @Autowired
    private UserMapper userMapper;

    @Test
    public void func(){
        Boolean login = loginService.login("navy","1452");
        System.out.println(login);
    }

    @Test
    public void func2(){
        User user = userMapper.findUserByUsernameAndPassword("navy","123456");
        System.out.println(user);
    }
}
