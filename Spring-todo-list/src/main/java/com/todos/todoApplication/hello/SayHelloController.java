package com.todos.todoApplication.hello;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.logging.Logger;

@Controller
public class SayHelloController {

  @RequestMapping("say-hello")
  @ResponseBody
  public String sayHello() {
    return "Hello! What are you learning today?";
  }

  @RequestMapping("say-hello-jsp")
  public String sayHelloJsp(@RequestParam String name, ModelMap model) {
    model.put("name",name);
    return "sayHello";
  }
}
