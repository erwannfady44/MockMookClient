import {TestBed} from '@angular/core/testing';

import {resourceService} from './resource.service';

describe('resourceService', () => {
    let service: resourceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(resourceService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
