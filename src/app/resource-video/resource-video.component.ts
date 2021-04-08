import {Component, Input, OnInit} from '@angular/core';
import {ResourceModel} from '../model/Resource.model';
import {AppService} from '../services/app.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
    selector: 'app-resource-video',
    templateUrl: './resource-video.component.html',
    styleUrls: ['./resource-video.component.scss']
})
export class ResourceVideoComponent implements OnInit {
    @Input() resource: ResourceModel;

    constructor(private app: AppService, private sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        console.log(this.url());
    }

    getTime(): string {
        return this.app.dateDiff(this.resource._date, Date.now());
    }

    url(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.resource._url.substring(17));
    }
}
