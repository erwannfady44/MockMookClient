import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RoutingComponent} from './routing/routing.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {NavbarComponent} from './navbar/navbar.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {UserModel} from './model/User.model';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', component: HomeComponent},
    {path: '**', component: NotFoundComponent}

];


@NgModule({
    declarations: [
        AppComponent,
        RoutingComponent,
        LoginComponent,
        SignupComponent,
        HomeComponent,
        NotFoundComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-top-right'
        }),
        HttpClientModule
    ],
    providers: [
        AuthService,
        UserModel,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
