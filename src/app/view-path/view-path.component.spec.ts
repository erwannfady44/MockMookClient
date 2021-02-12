import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewPathComponent} from './view-path.component';

describe('ViewPathComponent', () => {
    let component: ViewPathComponent;
    let fixture: ComponentFixture<ViewPathComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ViewPathComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewPathComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
