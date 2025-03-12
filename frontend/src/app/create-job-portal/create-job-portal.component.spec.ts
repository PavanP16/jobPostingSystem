import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobPortalComponent } from './create-job-portal.component';

describe('CreateJobPortalComponent', () => {
  let component: CreateJobPortalComponent;
  let fixture: ComponentFixture<CreateJobPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateJobPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateJobPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
