import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.router.navigate(['']);
  }

  onSignUp(): void {
    this.router.navigate(['sign-up']);
  }
}
