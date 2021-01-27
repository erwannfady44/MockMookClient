import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-singup',
    templateUrl: './singup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SingupComponent implements OnInit {

    constructor(private router: Router,
                private toastr: ToastrService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm): void {
        this.router.navigate(['']);
    }

    onLogin(): void {
        this.router.navigate(['login']);
    }
}
