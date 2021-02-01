import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {PathService} from '../services/path.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-create-path',
    templateUrl: './create-path.component.html',
    styleUrls: ['./create-path.component.css']
})
export class CreatePathComponent implements OnInit {

    constructor(private router: Router,
                private toastr: ToastrService,
                private pathService: PathService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm): void {
        this.pathService.createPath(form.value.title, form.value.description)
            .subscribe((res) => {
                this.toastr.success('Le parcours ' + form.value.title + ' a été crée avec succès² !', 'Créé avec succès');
                this.router.navigate(['']);
            }, error => {
                this.toastr.error(error.message, 'Erreur');
            });
    }

}
