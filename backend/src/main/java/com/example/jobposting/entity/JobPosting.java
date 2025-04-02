package com.example.jobposting.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class JobPosting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String department;
    private String startDate;
    private float salary;
    private int experienceRequired;
    private int no_of_applied;

    // Constructors, getters, and setters

    public JobPosting() {
    }

    public JobPosting(String title, String description, String department, String startDate, float salary, int experienceRequired, int no_of_applied) {
        this.title = title;
        this.description = description;
        this.department = department;
        this.startDate = startDate;
        this.salary = salary;
        this.experienceRequired = experienceRequired;
        this.no_of_applied = no_of_applied;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getStartDate() {return startDate;}

    public void setStartDate(String startDate) {this.startDate = startDate;}

    public float getSalary() {return salary;}

    public void setSalary(float salary) {this.salary = salary;}

    public int getExperienceRequired() {return experienceRequired;}

    public void setExperienceRequired(int experienceRequired) {this.experienceRequired = experienceRequired;}

    public int getNo_of_applied() {return no_of_applied;}

    public void setNo_of_applied(int no_of_applied) {this.no_of_applied = no_of_applied;}
}
