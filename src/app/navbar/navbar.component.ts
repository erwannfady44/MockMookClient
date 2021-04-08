//
// ################################################################ Navbar #################################################################
// Déclaration des méthodes en TypeScript pour la barre de navigation.
//

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    userDropDown = false;
    hover = false;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    // fonction pour rediriger vers la page de connexion
    onLogin(): void {
        this.router.navigate(['login']);
    }

    // fonction pour rediriger vers la page d'inscription
    onSignUp(): void {
        this.router.navigate(['signup']);
    }

    // fonction pour rediriger vers la page d'accueil
    onHome(): void {
        this.router.navigate(['']);
    }

    // fonction retournant un boolean permettant de modifier l'affichage si l'utilisateur est connecté
    isConnect(): boolean {
        return !!sessionStorage.getItem('token');
    }

    // fonction retournant le pseudonyme de l'utilisateur connecté
    getPseudo(): string {
        return sessionStorage.getItem('pseudo');
    }

    // fonction permettant de gérer l'affichage du menu déroulant utilisateur
    show(): void {
        console.log(this.hover + '   -   ' + this.userDropDown);
        if (!this.userDropDown) {
            this.userDropDown = true;
        } else if (this.hover) {
            this.userDropDown = false;
            this.hover = false;
        } else if (!this.hover) {
            this.userDropDown = true;
        } else {
            this.userDropDown = false;
        }
    }
}
