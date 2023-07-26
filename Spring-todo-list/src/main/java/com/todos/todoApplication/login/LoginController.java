package com.todos.todoApplication.login;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
  private AuthenticationService authenticationService;

  public LoginController(AuthenticationService authenticationService) {
    super();
    this.authenticationService = authenticationService;
  }

  @RequestMapping(value = "login", method = RequestMethod.GET)
  public String gotoLogin(){
    return "login";
  }

  @RequestMapping(value = "login", method = RequestMethod.POST)
  public String gotoWelcome(@RequestParam String name, @RequestParam String password, ModelMap map){
    if (authenticationService.authenticate(name,password)){
      map.put("name", name);
      return "welcome";
    }
    map.put("error", "try again!!");
    return "login";
  }
}
