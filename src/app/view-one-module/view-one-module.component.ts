import {Component, Input, OnInit} from '@angular/core';
import {ModuleModel} from '../model/Module.model';

@Component({
    selector: 'app-view-one-module',
    templateUrl: './view-one-module.component.html',
    styleUrls: ['./view-one-module.component.css']
})
export class ViewOneModuleComponent implements OnInit {
    @Input() module: ModuleModel;

    constructor() {
    }

    ngOnInit(): void {
    }

}
