import {Component, Input, OnInit} from '@angular/core';
import {PathModel} from '../model/Path.model';

@Component({
    selector: 'app-path',
    templateUrl: './path.component.html',
    styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {
    @Input() path: PathModel;

    constructor() {
    }

    ngOnInit(): void {
    }

}
