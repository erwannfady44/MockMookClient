import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {SingupComponent} from './signup/singup.component';

import {Router} from '@angular/router';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {NotFoundComponent} from './not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import { RoutingComponent } from './routing/routing.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'sign-up', component: SingupComponent},
    {path: '', component: HomeComponent},
    {path: '**', component: NotFoundComponent}

];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        LoginComponent,
        SingupComponent,
        NotFoundComponent,
        RoutingComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-top-right'
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
