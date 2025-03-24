import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-job-portal',
  imports: [],
  templateUrl: './create-job-portal.component.html',
  styleUrl: './create-job-portal.component.css',
})
export class CreateJobPortalComponent implements OnInit {
  jobForm = new FormGroup({
    jobTitle: new FormControl('', Validators.required),
    companyName: new FormControl('', Validators.required),
    joiningDate: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.jobForm.value);
    // Call API to post the job here
  }
}
