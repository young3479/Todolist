package com.todos.todoApplication.todo;
//json 데이터 무시
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDate;


@JsonIgnoreProperties(ignoreUnknown = true)
public class Todo {
  @JsonProperty("userId")
  private int userId;

  @JsonProperty("id")
  private int id;

  @JsonProperty("date")
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
  private LocalDate date;

  @JsonProperty("text")
  private String text;

  @JsonProperty("done")
  private boolean done;


  // Constructor and getters/setters...

  @Override
  public String toString() {
    return "Todo{" +
            "userId=" + userId +
            ", id=" + id +
            ", text='" + text + '\'' +
            ", date=" + date +
            ", done=" + done +
            '}';
  }
}

//기존코드
//public class Todo {
//  private int id;
//  private String username;
//  private String description;
//  private LocalDate targetDate;
//  private boolean done;
//
//  public Todo(int id, String username, String description, LocalDate targetDate, boolean done) {
//    this.id = id;
//    this.username = username;
//    this.description = description;
//    this.targetDate = targetDate;
//    this.done = done;
//  }
//
//  public void setId(int id) {
//    this.id = id;
//  }
//
//  public void setUsername(String username) {
//    this.username = username;
//  }
//
//  public void setDescription(String description) {
//    this.description = description;
//  }
//
//  public void setTargetDate(LocalDate targetDate) {
//    this.targetDate = targetDate;
//  }
//
//  public void setDone(boolean done) {
//    this.done = done;
//  }
//
//  public int getId() {
//    return id;
//  }
//
//  public String getUsername() {
//    return username;
//  }
//
//  public String getDescription() {
//    return description;
//  }
//
//  public LocalDate getTargetDate() {
//    return targetDate;
//  }
//
//  public boolean isDone() {
//    return done;
//  }
//
//  @Override
//  public String toString() {
//    return "Todo{" +
//            "id=" + id +
//            ", username='" + username + '\'' +
//            ", description='" + description + '\'' +
//            ", targetDate=" + targetDate +
//            ", done=" + done +
//            '}';
//  }
//}
