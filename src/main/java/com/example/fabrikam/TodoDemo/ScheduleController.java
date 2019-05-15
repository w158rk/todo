package com.example.fabrikam.TodoDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ModelAttribute;
import java.util.ArrayList;

import com.alibaba.fastjson.JSON;

@Controller
public class ScheduleController {

    @Autowired
    private TodoItemRepository repository;

    @RequestMapping("/back/schedule")
    public ResponseEntity<String> index() {
        ArrayList<TodoItem> todoList = (ArrayList<TodoItem>) repository.findAll();

        // System.out.println(todoList.length);
        String jsonString = JSON.toJSONString(todoList);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        System.out.println(jsonString);
        return new ResponseEntity<String>(jsonString, headers,  HttpStatus.OK);
    }

    @RequestMapping("/back/schedule/add")
    public String addTodo(@ModelAttribute TodoItem requestItem) {
        repository.save(requestItem);
        return "redirect:/schedule";
    }

    // @RequestMapping("/update")
    // public String updateTodo(@ModelAttribute TodoListViewModel requestItems) {
        // for (TodoItem requestItem : requestItems.getTodoList() ) {
             // TodoItem item = new TodoItem(requestItem.getCategory(), requestItem.getName());
             // item.setComplete(requestItem.isComplete());
             // item.setId(requestItem.getId());
             // repository.save(item);
        // }
        // return "redirect:/";
    // }
}
