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
import { CreateRessourceComponent } from './create-ressource/create-ressource.component';
import { ViewRessourceComponent } from './view-ressource/view-ressource.component';
import { CreatePathComponent } from './create-path/create-path.component';
import { ViewPathComponent } from './view-path/view-path.component';
import {PathService} from './services/path.service';
import {PathModel} from './model/Path.model';
import {ClassService} from './services/class.service';
import {ClassModel} from './model/Class.model';
import {RessourceService} from './services/ressource.service';
import {RessourceModel} from './model/Ressource.model';
import { PathComponent } from './path/path.component';
import { FooterComponent } from './footer/footer.component';
import { ViewOnePathComponent } from './view-one-path/view-one-path.component';
import { CreateClassComponent } from './create-class/create-class.component';


const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'path/:idPath', component: ViewOnePathComponent},
    {path: 'create-path', component: CreatePathComponent},
    {path: 'path/:idPath/create-class', component: CreateClassComponent},
    {path: 'create-ressource', component: CreateRessourceComponent},
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
        NavbarComponent,
        // CreateClassesComponent,
        CreateRessourceComponent,
        ViewRessourceComponent,
        CreatePathComponent,
        ViewPathComponent,
        PathComponent,
        FooterComponent,
        ViewOnePathComponent,
        CreateClassComponent
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
        PathService,
        PathModel,
        ClassService,
        ClassModel,
        RessourceService,
        RessourceModel
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
