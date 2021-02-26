import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneRessourceComponent } from './view-one-ressource.component';

describe('ViewOneRessourceComponent', () => {
  let component: ViewOneRessourceComponent;
  let fixture: ComponentFixture<ViewOneRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
