import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneOneModuleComponent } from './clone-one-module.component';

describe('CloneOneModuleComponent', () => {
  let component: CloneOneModuleComponent;
  let fixture: ComponentFixture<CloneOneModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneOneModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneOneModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
