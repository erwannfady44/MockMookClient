//
// ############################################################## Ressource ################################################################
// Déclaration des méthodes en TypeScript pour une ressource
//

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

    // fonction retournant le temps écoulé depuis la dernière modification de la ressource
    getTime(): string {
        return this.app.dateDiff(this.resource._date, Date.now());
    }

    // fonction retournant l'url de la video afin de l'utiliser dans le lecteur YouTube intégré
    url(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.resource._url.substring(17));
    }
}
