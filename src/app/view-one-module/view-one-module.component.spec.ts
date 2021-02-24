import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewOneModuleComponent} from './view-one-module.component';

describe('ViewOneModuleComponent', () => {
    let component: ViewOneModuleComponent;
    let fixture: ComponentFixture<ViewOneModuleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ViewOneModuleComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewOneModuleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
