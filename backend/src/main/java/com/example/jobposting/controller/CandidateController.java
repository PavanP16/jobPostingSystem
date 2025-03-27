package com.example.jobposting.controller;

import com.example.jobposting.entity.Candidate;
import com.example.jobposting.repository.CandidateRepository;
import com.example.jobposting.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/candidates")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.POST, RequestMethod.GET})
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @PostMapping
    public ResponseEntity<String> registerCandidate(@RequestBody Candidate candidate) {
        System.out.println(candidate);
        candidateService.saveCandidate(candidate);
        return new ResponseEntity<>("Candidate registered successfully", HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginCandidate(@RequestBody LoginRequest loginRequest) {
        Candidate candidate = candidateService.findByEmail(loginRequest.getEmail());

        if (candidate != null && candidate.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.badRequest().body("Invalid email or password");
        }
    }

    @GetMapping
    public List<Candidate> listCandidates() {
        return candidateService.listCandidates();
    }
}

class LoginRequest {
    private String email;
    private String password;
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
