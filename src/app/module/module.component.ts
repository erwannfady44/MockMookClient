import {Component, Input, OnInit} from '@angular/core';
import {ModuleModel} from '../model/Module.model';

@Component({
    selector: 'app-module',
    templateUrl: './module.component.html',
    styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
    @Input() module: ModuleModel;
    @Input() edit: boolean;

    constructor() {
    }

    ngOnInit(): void {
        console.log();
    }
}
