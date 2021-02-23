import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    userDropDown = false;
    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    onLogin(): void {
        this.router.navigate(['login']);
    }

    onSignUp(): void {
        this.router.navigate(['signup']);
    }

    onHome(): void {
        this.router.navigate(['']);
    }

    isConnect(): boolean {
        return !!sessionStorage.getItem('token');
    }

    getPseudo(): string {
        return sessionStorage.getItem('pseudo');
    }
}
