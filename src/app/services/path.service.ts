import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PathModel} from '../model/Path.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PathService {
    private URL = 'http://localhost:3000/api/path';
    private allPath = [];
    pathSubject = new Subject<PathModel[]>();

    constructor(private http: HttpClient,
                private path: PathModel) {
        this.path = new PathModel();
    }

    createPath(title: string, description: string): Observable<any> {
        this.path._title = title;
        this.path._description = description;
        this.path._idCreator = sessionStorage.getItem('idUser');

        const params = {
            idUser: sessionStorage.getItem('idUser'),
            title: this.path._title,
            description: this.path._description
        };
        return this.http.put<any>(`${this.URL}/`, params, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        });
    }

    getAllPath(): void {
        this.http.get<any>(`${this.URL}/`).subscribe(
            res => {
                this.allPath = res.paths;
                this.emitPathSubject();
            }, error => {
                console.log(error.message);
            }
        );
    }

    emitPathSubject(): void {
        this.getAllPath();
        this.pathSubject.next(this.allPath.slice());
    }
}
