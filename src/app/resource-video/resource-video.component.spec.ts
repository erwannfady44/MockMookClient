import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ResourceVideoComponent} from './resource-video.component';

describe('ResourceVideoComponent', () => {
    let component: ResourceVideoComponent;
    let fixture: ComponentFixture<ResourceVideoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResourceVideoComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResourceVideoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
