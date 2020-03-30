package com.empmanage.controller;


import com.empmanage.pojo.User;
import com.empmanage.service.LoginService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class LoginController {

    @Autowired
    private LoginService loginService;

    @RequestMapping("/index")
    public String loginIndex(){
        return "login";
    }

    @PostMapping("/login")
    public String login(String username,String password, Model model){

        System.out.println(username);
        System.out.println(password);

        User user = loginService.findUserByUP(username, password);
        System.out.println(user);
        if(user == null){
            //用户名与密码错误
            model.addAttribute("msg","用户名与密码错误");
            return "/";
        }
        model.addAttribute("msg","登陆成功");
        model.addAttribute("user",user);
        return "my";
    }

}
