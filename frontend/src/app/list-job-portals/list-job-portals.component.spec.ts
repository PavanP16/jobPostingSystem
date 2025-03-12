import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobPortalsComponent } from './list-job-portals.component';

describe('ListJobPortalsComponent', () => {
  let component: ListJobPortalsComponent;
  let fixture: ComponentFixture<ListJobPortalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListJobPortalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJobPortalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
