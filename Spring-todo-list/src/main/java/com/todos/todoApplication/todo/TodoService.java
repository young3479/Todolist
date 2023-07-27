package com.todos.todoApplication.todo;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {

  private static int countTodos = 0;
  private static List<Todo> todos = new ArrayList<>();

// static {
//    todos.add(new Todo(++countTodos, "dongik", "learn AWS",
//           LocalDate.now().plusYears(1), false));
//  }

  public List<Todo> findByUser(String user){
    return todos;
  }

//  public void addTodo(String username, String description, LocalDate targetDate, boolean done){
//   Todo todo = new Todo(++countTodos, username, description, targetDate, done);
//   todos.add(todo);
//  }

  public Todo addTodo(String username, String description, LocalDate targetDate, boolean done) {
    Todo todo = new Todo();
    return todo;
////    Todo todo = new Todo(++countTodos, username, description, targetDate, done);
//    todos.add(todo);
//    return todo;  // 추가한 Todo를 반환합니다.
  }


}
