import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-dropdown',
    templateUrl: './user-dropdown.component.html',
    styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    onLogOut(): void {
        sessionStorage.clear();
        this.router.navigate(['']);
    }
}
