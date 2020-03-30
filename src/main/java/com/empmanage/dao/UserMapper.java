package com.empmanage.dao;


import com.empmanage.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserMapper {

    @Select("select * from t_user where id = #{id}")
    public User findUserById(Integer id);

    @Select("select * from t_user where t_username = #{t_username} and t_password = #{t_password}")
    public User findUserByUsernameAndPassword(@Param("t_username")String t_username, @Param("t_password")String t_password);

}
