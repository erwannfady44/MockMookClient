import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ModuleModel} from '../model/Module.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ModuleService {
    private URL = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {
    }

    createModule(module: ModuleModel): Observable<any> {
        const params = {
            idPath: module._idPath,
            title: module._title,
            description: module._description,
            idUser: sessionStorage.getItem('idUser')
        };
        return this.http.put<any>(`${this.URL}/path/${module._idPath}/module`, params, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        });
    }
}
