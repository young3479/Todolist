package com.todos.todoApplication.todo;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.util.List;

//시간관련
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
@Controller
public class TodoController {

  private final TodoService todoService;
  private final ResourceLoader resourceLoader;

  @Autowired
  public TodoController(TodoService todoService, ResourceLoader resourceLoader) {
    this.todoService = todoService;
    this.resourceLoader = resourceLoader;
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping("api/todos")
  @ResponseBody
  public List<Todo> listTodos() throws IOException {
    Resource resource = resourceLoader.getResource("classpath:data.json");
    try (InputStream inputStream = resource.getInputStream()) {
      ObjectMapper mapper = new ObjectMapper();
      mapper.registerModule(new JavaTimeModule());  // 이 부분을 추가합니다.
      mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);  // 이 부분을 추가합니다.
      return mapper.readValue(inputStream, new TypeReference<List<Todo>>() {});
    }
  }

  @RequestMapping("list-todos")
  public String listAllTodos(ModelMap modelMap) {
    List<Todo> todos = todoService.findByUser("kiki");
    modelMap.addAttribute("todos", todos);
    return "listTodos";
  }

  @RequestMapping(value = "add-todo", method = RequestMethod.GET)
  public String showNewTodoPage() {
    return "todo";
  }

//  @RequestMapping(value = "add-todo", method = RequestMethod.POST)
//  public String addTodo(@RequestParam String description, ModelMap model) {
//    String username = (String) model.get("name");
//    todoService.addTodo(username, description, LocalDate.now().plusYears(1), false);
//    return "redirect:list-todos";
//  }

  @RequestMapping(value = "add-todo", method = RequestMethod.POST)
  public String addTodo(@RequestParam String description, ModelMap model) {
    String username = (String) model.get("name");
    // targetDate를 LocalDate.now().plusYears(1), done을 false로 설정하여 TodoService의 addTodo 메소드를 호출합니다.
    todoService.addTodo(username, description, LocalDate.now().plusYears(1), false);
    return "redirect:list-todos";
  }

}
