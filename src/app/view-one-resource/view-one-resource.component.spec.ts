import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneresourceComponent } from './view-one-resource.component';

describe('ViewOneresourceComponent', () => {
  let component: ViewOneresourceComponent;
  let fixture: ComponentFixture<ViewOneresourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneresourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
