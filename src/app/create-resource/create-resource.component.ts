import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ModuleService} from '../services/module.service';
import {ResourceModel} from '../model/Resource.model';

@Component({
    selector: 'app-create-resource',
    templateUrl: './create-resource.component.html',
    styleUrls: ['./create-resource.component.css']
})
export class CreateResourceComponent implements OnInit {

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

        const resource = new ResourceModel(this.route.snapshot.paramMap.get('idModule'),
            form.value.url,
            form.value.title,
            form.value.description,
            new Date()
        );

        this.moduleService.addResource(resource).subscribe(
            () => {
                this.toastr.success('La resource ' + form.value.title + ' a été crée !', 'resource créé');
                this.router.navigate(['path', this.route.snapshot.paramMap.get('idPath'), this.route.snapshot.paramMap.get('idModule')]);
            }, error => {
                this.toastr.error(error.message, 'erreur');
            }
        );
    }
}
