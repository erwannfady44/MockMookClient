import {Component, Input, OnInit} from '@angular/core';
import {ModuleModel} from '../model/Module.model';
import {AppService} from '../services/app.service';

@Component({
    selector: 'app-module',
    templateUrl: './module.component.html',
    styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
    @Input() module: ModuleModel;
    @Input() edit: boolean;

    constructor(private app: AppService) {
    }

    ngOnInit(): void {
        console.log();
    }

    getTime(): string {
        return this.app.dateDiff(this.module._date, Date.now());
    }
}
