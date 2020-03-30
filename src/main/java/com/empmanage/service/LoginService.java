package com.empmanage.service;

import com.empmanage.pojo.User;

public interface LoginService {

    /**
     * 登陆
     * @param username
     * @param password1
     * @return
     */
    public Boolean login(String username,String password);

    /**
     * 根据用户名与密码获取用户
     * @param username
     * @param password
     * @return
     */
    public User findUserByUP(String username, String password);

}
