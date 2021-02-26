import { ComponentFixture, TestBed } from '@angular/core/testing';

import { resourceComponent } from './resource.component';

describe('resourceComponent', () => {
  let component: resourceComponent;
  let fixture: ComponentFixture<resourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ resourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(resourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
