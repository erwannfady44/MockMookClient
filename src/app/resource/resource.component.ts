//
// ############################################################## Ressource ################################################################
// Déclaration des méthodes en TypeScript pour une ressource
//

import {Component, Input, OnInit} from '@angular/core';
import {ResourceModel} from '../model/Resource.model';
import {AppService} from '../services/app.service';

@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
    @Input() resource: ResourceModel;

    constructor(private app: AppService) {
    }

    ngOnInit(): void {
    }

    // fonction retournant le temps écoulé depuis la dernière modification de la ressource
    getTime(): string {
        return this.app.dateDiff(this.resource._date, Date.now());
    }

}
