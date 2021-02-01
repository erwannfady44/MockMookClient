import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClassesModel} from '../model/Classes.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ClassesService {
    private URL = 'http://localhost:3000/api/class';

    constructor(private http: HttpClient) { }

    createClasses(classes: ClassesModel): Observable<any> {
        const option = {
            classes,
            token: sessionStorage.getItem('token'),
            pseudo: sessionStorage.getItem('psuedo')
        };
        return this.http.put<any>(`${this.URL}/login`, option);
    }
}
