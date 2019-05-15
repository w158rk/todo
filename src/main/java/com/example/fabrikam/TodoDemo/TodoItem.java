package com.example.fabrikam.TodoDemo;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;


@Data
@Entity
public class TodoItem {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long itemId;
    private String subject;
    private String title;
    private String content;
    private Date issueDate;
    private Date dueDate;
    private Date finishDate;
    private Date submitDate;
    private Integer status;
    private String note;
    // private String category;
    // private String name;
    // private boolean complete;

    public TodoItem() {}

    // add for test, I guess
    public TodoItem(String category, String name) {
        this.subject = category;
        this.title = name;
        this.status = 2;
    }

    public String myString() {
        String rtn = new String();
        rtn += this.subject;
        rtn += "-";
        rtn += this.title;
        return rtn;
    }

}