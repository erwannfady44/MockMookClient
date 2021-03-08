import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router,
                private toastr: ToastrService,
                private auth: AuthService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm): void {
        this.auth.login(form.value.pseudo, form.value.password)
            .subscribe(
                res => {
                    this.auth._user._id = res.idUser;
                    this.auth._token = res.token;
                    sessionStorage.setItem('token', res.token);
                    sessionStorage.setItem('idUser', res.idUser);
                    sessionStorage.setItem('pseudo', form.value.pseudo);
                    this.router.navigate(['']);
                    this.toastr.success('Bienvenue ' + form.value.pseudo + ' !', 'Connexion réussie');

                }, error => {
                    this.toastr.error(error.error.error, 'Erreur');
                }
            );
    }
}
