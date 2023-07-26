package com.todos.todoApplication.todo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.List;

//CORS 설정 관련
import org.springframework.web.bind.annotation.CrossOrigin;


@Controller
public class TodoController {
  TodoService todoService;

  public TodoController(TodoService todoService){
    super();
    this.todoService = todoService;
  }

  @CrossOrigin(origins = "http://localhost:3000") // 프론트엔드 서버 주소를 여기에 적습니다.
  @RequestMapping("api/todos") //프론트 작업물 리액트 연동
  public String listTodos(ModelMap modelMap){
    return "redirect:https://jsonplaceholder.typicode.com/todos";
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
