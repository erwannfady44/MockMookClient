import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceComponent } from './ressource.component';

describe('RessourceComponent', () => {
  let component: RessourceComponent;
  let fixture: ComponentFixture<RessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
