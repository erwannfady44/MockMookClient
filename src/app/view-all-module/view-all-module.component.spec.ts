import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewAllModuleComponent} from './view-all-module.component';

describe('ViewAllModuleComponent', () => {
    let component: ViewAllModuleComponent;
    let fixture: ComponentFixture<ViewAllModuleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ViewAllModuleComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewAllModuleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
