import {Component, Input, OnInit} from '@angular/core';
import {ResourceModel} from '../model/Resource.model';
import {AppService} from '../services/app.service';

@Component({
    selector: 'app-resource-video',
    templateUrl: './resource-video.component.html',
    styleUrls: ['./resource-video.component.scss']
})
export class ResourceVideoComponent implements OnInit {
    @Input() resource: ResourceModel;

    constructor(private app: AppService) {
    }

    ngOnInit(): void {
    }

    getTime(): string {
        return this.app.dateDiff(this.resource._date, Date.now());
    }
}
