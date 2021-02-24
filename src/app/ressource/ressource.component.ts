import {Component, Input, OnInit} from '@angular/core';
import {ResourceModel} from '../model/Resource.model';

@Component({
    selector: 'app-ressource',
    templateUrl: './ressource.component.html',
    styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {
    @Input() ressource: ResourceModel;

    constructor() {
    }

    ngOnInit(): void {
    }

}
