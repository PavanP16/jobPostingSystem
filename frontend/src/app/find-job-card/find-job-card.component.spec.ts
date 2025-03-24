import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobCardComponent } from './find-job-card.component';

describe('FindJobCardComponent', () => {
  let component: FindJobCardComponent;
  let fixture: ComponentFixture<FindJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindJobCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
