import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ClassesService} from '../services/classes.service';
import {NgForm} from '@angular/forms';
import {ClassesModel} from '../model/Classes.model';

@Component({
    selector: 'app-create-classes',
    templateUrl: './create-classes.component.html',
    styleUrls: ['./create-classes.component.css']
})
export class CreateClassesComponent implements OnInit {

    constructor(private toastr: ToastrService,
                private router: Router,
                private classesService: ClassesService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm): void {
        /*const title = form.value.title;
        const description = form.value.description;

        const classes = new ClassesModel(sessionStorage.getItem('idUser'), title, description);
        this.classesService.createClasses(classes);*/
    }
}
