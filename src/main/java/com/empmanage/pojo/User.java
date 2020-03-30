package com.empmanage.pojo;

public class User {
    private Integer id;
    private String tUsername;
    private String tPassword;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", tUsername='" + tUsername + '\'' +
                ", tPassword='" + tPassword + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String gettUsername() {
        return tUsername;
    }

    public void settUsername(String tUsername) {
        this.tUsername = tUsername;
    }

    public String gettPassword() {
        return tPassword;
    }

    public void settPassword(String tPassword) {
        this.tPassword = tPassword;
    }

    public User() {

    }

    public User(Integer id, String tUsername, String tPassword) {

        this.id = id;
        this.tUsername = tUsername;
        this.tPassword = tPassword;
    }
}
