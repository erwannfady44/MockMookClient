import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ModuleService} from '../services/module.service';
import {ResourceModel} from '../model/Resource.model';

@Component({
    selector: 'app-create-ressource',
    templateUrl: './create-ressource.component.html',
    styleUrls: ['./create-ressource.component.css']
})
export class CreateRessourceComponent implements OnInit {

    constructor(private router: Router,
                private route: ActivatedRoute,
                private toastr: ToastrService,
                private moduleService: ModuleService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm): void {
        if (!sessionStorage.getItem('token')) {
            this.router.navigate(['login']);
        }

        const resource = new ResourceModel(this.route.snapshot.paramMap.get('idPath'),
            form.value.url,
            form.value.title,
            form.value.description,
        );

        this.moduleService.addResource(resource).subscribe(
            () => {
                this.toastr.success('La ressource ' + form.value.title + ' a été crée !', 'Ressource crée');
                this.router.navigate(['../']);
            }, error => {
                this.toastr.error(error.message, 'erreur');
            }
        );
    }
}
