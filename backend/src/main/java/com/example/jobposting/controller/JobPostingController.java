package com.example.jobposting.controller;

import com.example.jobposting.entity.JobPosting;
import com.example.jobposting.repository.JobPostingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
public class JobPostingController {

    @Autowired
    private JobPostingRepository jobPostingRepository;

    @PostMapping
    public ResponseEntity<JobPosting> addJobPosting(@RequestBody JobPosting jobPosting) {
        return new ResponseEntity<>(jobPostingRepository.save(jobPosting), HttpStatus.CREATED);
    }

    @GetMapping
    public List<JobPosting> listJobPostings() {
        return jobPostingRepository.findAll();
    }


}
