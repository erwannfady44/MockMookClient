import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModuleModel} from '../model/Module.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ModuleService} from '../services/module.service';

@Component({
    selector: 'app-create-class',
    templateUrl: './create-module.component.html',
    styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent implements OnInit {

    constructor(private router: Router,
                private route: ActivatedRoute,
                private toastr: ToastrService,
                private moduleService: ModuleService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm): void {
        console.log('token');
        if (!sessionStorage.getItem('token')) {
            this.router.navigate(['login']);
        }
        const module = new ModuleModel(this.route.snapshot.paramMap.get('idPath'),
            sessionStorage.getItem('idUser'),
            form.value.title,
            form.value.description);
        this.moduleService.createModule(module)
            .subscribe(
                () => {
                    this.toastr.success('Le cours ' + form.value.title + ' a été crée !', 'Module crée');
                    this.router.navigate(['path/', this.route.snapshot.paramMap.get('idPath')]);
                }, error => {
                    this.toastr.error(error.message, 'erreur');
                }
            );
    }
}

