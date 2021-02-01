import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassesComponent } from './create-classes.component';

describe('CreateClassesComponent', () => {
  let component: CreateClassesComponent;
  let fixture: ComponentFixture<CreateClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
