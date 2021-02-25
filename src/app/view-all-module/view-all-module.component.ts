import {Component, Input, OnInit} from '@angular/core';
import {ModuleModel} from '../model/Module.model';
import {ModuleService} from '../services/module.service';
import {PathModel} from '../model/Path.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-view-all-module',
    templateUrl: './view-all-module.component.html',
    styleUrls: ['./view-all-module.component.css']
})
export class ViewAllModuleComponent implements OnInit {
    keyWord: any;
    modules: Array<ModuleModel>;
    constructor(private moduleService: ModuleService,
                public route: ActivatedRoute) {
    }

    ngOnInit(): void {

    }

    async search(): Promise<any> {
        if (this.keyWord.length >= 3) {
            const keyWords = this.keyWord.split(' ');
            this.modules = await this.moduleService.searchByKeyWords(this.route.snapshot.paramMap.get('idPath'), keyWords);
        }
    }
}
