import {Component, Input, OnInit} from '@angular/core';
import {PathModel} from '../model/Path.model';
import {Router} from '@angular/router';
import {AppService} from '../services/app.service';

@Component({
    selector: 'app-path',
    templateUrl: './path.component.html',
    styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {
    @Input() path: PathModel;
    @Input() border: boolean;
    @Input() classList: Array<string>;
    @Input() edit: boolean;
    style: {};

    constructor(private router: Router,
                public app: AppService) {
    }

    ngOnInit(): void {

    }

    getTime(): string {
        return this.app.dateDiff(this.path._date, Date.now());
    }

    mouseEnter(): void {
        if (this.border) {
            this.style = {border: '2px solid #777'};
        }
    }

    mouseLeave(): void {
        if (this.border) {
            this.style = {border: '2px solid #DDD'};
        }
    }
}
