import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    onLogin(): void {
        this.router.navigate(['login']);
    }

    onSignUp(): void {
        this.router.navigate(['sign-up']);
    }

    onHome(): void {
        this.router.navigate(['']);
    }
}
