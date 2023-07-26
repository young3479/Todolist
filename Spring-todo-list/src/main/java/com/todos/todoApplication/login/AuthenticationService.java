package com.todos.todoApplication.login;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

  public boolean authenticate(String username, String password) {

    boolean isValidUserName = username.equalsIgnoreCase("kiki");
    boolean isValidPassword = password.equalsIgnoreCase("drake");

    return isValidUserName && isValidPassword;
  }
}