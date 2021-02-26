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
import {CreateResourceComponent} from './create-resource/create-resource.component';
import {CreatePathComponent} from './create-path/create-path.component';
import {ViewPathComponent} from './view-path/view-path.component';
import {PathService} from './services/path.service';
import {PathModel} from './model/Path.model';
import {ModuleService} from './services/module.service';
import {ModuleModel} from './model/Module.model';
import {ResourceService} from './services/resource.service';
import {ResourceModel} from './model/Resource.model';
import {PathComponent} from './path/path.component';
import {FooterComponent} from './footer/footer.component';
import {ViewOnePathComponent} from './view-one-path/view-one-path.component';
import {CreateModuleComponent} from './create-module/create-module.component';
import {ModuleComponent} from './module/module.component';
import {ViewAllModuleComponent} from './view-all-module/view-all-module.component';
import {UserDropdownComponent} from './user-dropdown/user-dropdown.component';
import {ResourceComponent} from './resource/resource.component';
import {AccountComponent} from './account/account.component';
import {ViewOneModuleComponent} from './view-one-module/view-one-module.component';
import { ViewOneResourceComponent } from './view-one-resource/view-one-resource.component';
import { CloneOneModuleComponent } from './clone-one-module/clone-one-module.component';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';

export const environment = {
    production: true
};

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'path/:idPath', component: ViewOnePathComponent},
    {path: 'create-path', component: CreatePathComponent},
    {path: 'path/:idPath/create-module', component: CreateModuleComponent},
    {path: 'path/:idPath/view-all-module', component: ViewAllModuleComponent},
    {path: 'path/:idPath/:idModule', component: ViewOneModuleComponent},
    {path: 'path/:idPath/:idModule/clone', component: ViewOneModuleComponent},
    {path: 'path/:idPath/:idModule/clone', component: CloneOneModuleComponent},
    {path: 'path/:idPath/:idModule/create-resource', component: CreateResourceComponent},
    {path: 'path/:idPath/:idModule/:idResource', component: ViewOneResourceComponent},
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
        CreateResourceComponent,
        CreatePathComponent,
        ViewPathComponent,
        PathComponent,
        FooterComponent,
        ViewOnePathComponent,
        CreateModuleComponent,
        ModuleComponent,
        ViewAllModuleComponent,
        UserDropdownComponent,
        ResourceComponent,
        AccountComponent,
        ViewOneModuleComponent,
        ViewOneResourceComponent,
        CloneOneModuleComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-left',
            timeOut: 2000,
            tapToDismiss: true
        }),
        HttpClientModule,
        DragDropModule,
    ],
    providers: [
        AuthService,
        UserModel,
        PathService,
        PathModel,
        ModuleService,
        ModuleModel,
        ResourceService,
        ResourceModel,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
