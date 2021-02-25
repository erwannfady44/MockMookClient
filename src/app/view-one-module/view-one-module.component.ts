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
    clone: boolean;
    canEdit: boolean;
    edit: boolean;


    constructor(private toastr: ToastrService,
                private router: Router,
                private moduleService: ModuleService,
                public route: ActivatedRoute) {
    }

    async ngOnInit(): Promise<any> {
        this.module = await this.moduleService.getOneModule(this.route.snapshot.paramMap.get('idPath'), this.route.snapshot.paramMap.get('idModule'));
        if (this.route.snapshot.queryParamMap.get('clone')) {
            this.clone = true;
        }
        console.log(sessionStorage.getItem('idUser'));
        if (this.module._idCreator === sessionStorage.getItem('idUser')) {
            this.canEdit = true;
        } else {
            this.canEdit = false;
        }
        if (this.route.snapshot.queryParamMap.get('edit') && this.module._idCreator === sessionStorage.getItem('idUser')) {
            this.edit = true;
        } else {
            this.edit = false;
        }
    }

    onClone(): void {
        this.moduleService.clone(this.module, this.route.snapshot.queryParamMap.get('idPath')).subscribe(
            () => {
                this.toastr.success('Le module a bien été cloné', 'Succès');
                this.router.navigate(['/path', this.route.snapshot.queryParamMap.get('idPath')]);
            }, error => {
                this.toastr.error(error.message, 'Erreur');
            }
        );

    }

    onValidated(): void {
        this.edit = false;
    }
}
