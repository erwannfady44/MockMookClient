import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private router: Router,
              private toastr: ToastrService,
              private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.auth.signUp(form.value.pseudo, form.value.password)
      .subscribe(
        res => {
          this.auth._user._id = res.idUser;
          this.auth._token = res.token;
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('idUser', res.idUser);
          sessionStorage.setItem('pseudo', form.value.pseudo);
          this.toastr.success('Bienvenue ' + form.value.pseudo + ' !', 'Inscription réussi');
          this.router.navigate(['']);

        }, error => {
          this.toastr.error(error.error.error, 'Erreur');
        }
      );
  }

  onLogin(): void {
    this.router.navigate(['login']);
  }
}
