import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private toastr: ToastrService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    onAddPath(): void {
        this.router.navigate(['create-path']);
    }

    isConnected(): boolean {
        return !!sessionStorage.getItem('token');
    }
}
