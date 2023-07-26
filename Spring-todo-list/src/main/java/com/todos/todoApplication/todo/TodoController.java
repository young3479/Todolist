package com.todos.todoApplication.todo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.List;

@Controller
public class TodoController {
  TodoService todoService;

  public TodoController(TodoService todoService){
    super();
    this.todoService = todoService;
  }

  @RequestMapping("list-todos")
  public String listAllTodos(ModelMap modelMap){
    List<Todo> todos = todoService.findByUser("kiki");
    modelMap.addAttribute("todos", todos);
    return "listTodos";
  }

  @RequestMapping(value = "add-todo", method = RequestMethod.GET)
  public String showNewTodoPage(){
    return "todo";
  }

  @RequestMapping(value = "add-todo", method = RequestMethod.POST)
  public String addTodo(@RequestParam String description, ModelMap model){
    String username = (String)model.get("name");
    todoService.addTodo(username, description, LocalDate.now().plusYears(1),false);
    return "redirect:list-todos";
  }
}
