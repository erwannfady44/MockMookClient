import {Component, OnInit} from '@angular/core';
import {ModuleModel} from '../model/Module.model';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {ModuleService} from '../services/module.service';

@Component({
    selector: 'app-view-one-module',
    templateUrl: './view-one-module.component.html',
    styleUrls: ['./view-one-module.component.css']
})
export class ViewOneModuleComponent implements OnInit {
    module: ModuleModel;

    constructor(private toastr: ToastrService,
                private router: Router,
                private moduleService: ModuleService,
                private route: ActivatedRoute) {
    }

    async ngOnInit(): Promise<any> {
        this.module = await this.moduleService.getOneModule(this.route.snapshot.paramMap.get('idPath'), this.route.snapshot.paramMap.get('idModule'));
        console.log(this.module);
    }

}
