import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-create-job-portal',
  imports: [ReactiveFormsModule],
  templateUrl: './create-job-portal.component.html',
  styleUrl: './create-job-portal.component.css',
})
export class CreateJobPortalComponent implements OnInit {
  protected readonly toast = toast;
  jobForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      department: ['', Validators.required],
      startDate: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      experienceRequired: ['', [Validators.required, Validators.min(0)]],
      description:['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  Submit(): void {

    console.log(this.jobForm.value);
    
    if (this.jobForm.valid) {
      this.apiService.createJobPortal(this.jobForm.value).subscribe(
        response => {
          console.log('Job posted successfully:', response);
          toast.success('Job created successfully!');
          this.router.navigate(['/list-job-portals']); // Navigate to jobs listing page after submission
        },
        error => {
          console.error('Error posting job:', error);
          toast.error('Error creating job!');
        }
      );
    } else {
      toast.warning('Fill all the fields!');
      console.error('Form is invalid');
    }
  }
}
