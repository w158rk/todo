package com.example.fabrikam.TodoDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

// import org.springframework.stereotype.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.ArrayList;

@RestController             // json格式响应前端
public class ScheduleController {

    @Autowired
    private TodoItemRepository repository;

    @RequestMapping("/back/schedule")
    public ArrayList<TodoItem> index() {
        ArrayList<TodoItem> todoList = (ArrayList<TodoItem>) repository.findAll();

        return todoList;
    }

    @RequestMapping(value="/back/schedule/add", method=RequestMethod.POST)
    public String addTodo(@RequestBody TodoItem requestItem) {
        repository.save(requestItem);
        System.out.println(requestItem.toString());
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

        // System.out.println(todoList.length);
        // String jsonString = JSON.toJSONString(todoList);

        // HttpHeaders headers = new HttpHeaders();
        // headers.add("Access-Control-Allow-Origin", "*");

        // System.out.println(jsonString);
        // return new ResponseEntity<String>(jsonString, headers,  HttpStatus.OK);
