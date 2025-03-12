import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCandidateComponent } from './register-candidate.component';

describe('RegisterCandidateComponent', () => {
  let component: RegisterCandidateComponent;
  let fixture: ComponentFixture<RegisterCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
