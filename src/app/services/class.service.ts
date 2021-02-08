import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ClassModel} from '../model/Class.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ClassService {
    private URL = 'http://localhost:3000/api/class';

    constructor(private http: HttpClient) { }

    createClasses(Class: ClassModel): Observable<any> {
        const params = {
            idPath: Class._idPath,
            title: Class._title,
            description: Class._description,
            idUser: sessionStorage.getItem('idUser')
        }
        return this.http.put<any>(`${this.URL}/`, params, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        });
    }
}
