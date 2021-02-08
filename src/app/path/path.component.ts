import {Component, Input, OnInit} from '@angular/core';
import {PathModel} from '../model/Path.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-path',
    templateUrl: './path.component.html',
    styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {
    @Input() path: PathModel;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    onViewOnPath(): void {
        this.router.navigate(['path/', this.path._idPath]);
    }
}
