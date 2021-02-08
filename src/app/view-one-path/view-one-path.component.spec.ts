import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnePathComponent } from './view-one-path.component';

describe('ViewOnePathComponent', () => {
  let component: ViewOnePathComponent;
  let fixture: ComponentFixture<ViewOnePathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOnePathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOnePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
