package com.example.fabrikam.TodoDemo;

import java.util.ArrayList;

import javax.validation.Valid;

public class ScheduleViewModel {

	@Valid
	private ArrayList<TodoItem> todoList = new ArrayList<TodoItem>();
	
	public ScheduleViewModel() {}
	
	public ScheduleViewModel(ArrayList<TodoItem> todoList) {
		this.todoList = todoList;
	}

	public ArrayList<TodoItem> getTodoList() {
		return todoList;
	}

	public void setTodoList(ArrayList<TodoItem> todoList) {
		this.todoList = todoList;
	}
}