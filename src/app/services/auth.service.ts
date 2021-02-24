import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../model/User.model';
import {Observable} from 'rxjs';
import {Variables} from '../variables';

@Injectable()
export class AuthService {
    private token: string;

    constructor(private http: HttpClient,
                private user: UserModel,
                private app: Variables) {
        this._user = new UserModel();
    }

    get _token(): string {
        return this.token;
    }

    set _token(value: string) {
        this.token = value;
    }

    get _user(): UserModel {
        return this.user;
    }

    set _user(value: UserModel) {
        this.user = value;
    }

    signUp(pseudo: string, password: string): Observable<any> {
        this._user._pseudo = pseudo;
        this._user._password = password;
        return this.http.post<any>(`${this.app.URL}/user/signup`, this._user);
    }

    login(pseudo: string, password: string): Observable<any> {
        this._user._pseudo = pseudo;
        this._user._password = password;
        return this.http.post<any>(`${this.app.URL}/user/login`, this._user);
    }
}
