import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateRessourceComponent} from './create-ressource.component';

describe('CreateRessourceComponent', () => {
    let component: CreateRessourceComponent;
    let fixture: ComponentFixture<CreateRessourceComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateRessourceComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateRessourceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
