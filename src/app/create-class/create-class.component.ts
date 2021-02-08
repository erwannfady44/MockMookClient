import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ClassModel} from '../model/Class.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ClassService} from '../services/class.service';

@Component({
    selector: 'app-create-class',
    templateUrl: './create-class.component.html',
    styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {

    constructor(private router: Router,
                private route: ActivatedRoute,
                private toastr: ToastrService,
                private classService: ClassService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm): void {
        console.log('token');
        if (!sessionStorage.getItem('token')) {
            this.router.navigate(['login']);
        }
        const Class = new ClassModel(this.route.snapshot.paramMap.get('idPath'),
            sessionStorage.getItem('idUser'),
            form.value.title,
            form.value.description);
        this.classService.createClasses(Class)
            .subscribe(
                () => {
                    this.toastr.success('Le cours ' + form.value.title + ' a été crée !', 'Cours crée');
                    this.router.navigate(['path/', this.route.snapshot.paramMap.get('idPath')]);
                }, error => {
                    this.toastr.error(error.message, 'erreur');
                }
            );
    }
}

