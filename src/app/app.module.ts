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
import {ToastrModule} from 'ngx-toastr';
import {NavbarComponent} from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {UserModel} from './model/User.model';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateRessourceComponent} from './create-ressource/create-ressource.component';
import {CreatePathComponent} from './create-path/create-path.component';
import {ViewPathComponent} from './view-path/view-path.component';
import {PathService} from './services/path.service';
import {PathModel} from './model/Path.model';
import {ModuleService} from './services/module.service';
import {ModuleModel} from './model/Module.model';
import {RessourceService} from './services/ressource.service';
import {ResourceModel} from './model/Resource.model';
import {PathComponent} from './path/path.component';
import {FooterComponent} from './footer/footer.component';
import {ViewOnePathComponent} from './view-one-path/view-one-path.component';
import {CreateModuleComponent} from './create-module/create-module.component';
import {ModuleComponent} from './module/module.component';
import {ViewAllModuleComponent} from './view-all-module/view-all-module.component';
import {UserDropdownComponent} from './user-dropdown/user-dropdown.component';
import {RessourceComponent} from './ressource/ressource.component';
import {AccountComponent} from './account/account.component';
import {ViewOneModuleComponent} from './view-one-module/view-one-module.component';


const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'path/:idPath', component: ViewOnePathComponent},
    {path: 'create-path', component: CreatePathComponent},
    {path: 'path/:idPath/create-module', component: CreateModuleComponent},
    {path: 'path/:idPath/:idModule', component: ViewOneModuleComponent},
    {path: 'path/:idPath/view-all-module', component: ViewAllModuleComponent},
    {path: 'path/:idPath/:idModule/create-resource', component: CreateRessourceComponent},
    {path: 'account', component: AccountComponent},
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
        CreateRessourceComponent,
        CreatePathComponent,
        ViewPathComponent,
        PathComponent,
        FooterComponent,
        ViewOnePathComponent,
        CreateModuleComponent,
        ModuleComponent,
        ViewAllModuleComponent,
        UserDropdownComponent,
        RessourceComponent,
        AccountComponent,
        ViewOneModuleComponent
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
        ModuleService,
        ModuleModel,
        RessourceService,
        ResourceModel
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
