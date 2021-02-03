import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PathModel} from '../model/Path.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PathService {
    private URL = 'http://localhost:3000/api/path';
    private allPath = Array<PathModel>();
    pathSubject = new Subject<PathModel[]>();

    constructor(private http: HttpClient) {
    }

    createPath(title: string, description: string): Observable<any> {
        const path = new PathModel(title, description, sessionStorage.getItem('pseudo'), '', new Date());

        const params = {
            idUser: sessionStorage.getItem('idUser'),
            title: path._title,
            description: path._description
        };
        return this.http.put<any>(`${this.URL}/`, params, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        });
    }

    getAllPath(): void {
        this.http.get<any>(`${this.URL}/`).subscribe(
            res => {
                this.allPath = [];
                res.json.forEach(path => {
                    this.allPath.push(new PathModel(path.title, path.description, path.pseudo, path.idPath, new Date()));
                });
                this.allPath.sort((a, b) => {
                    if (a._date < b._date) {
                        return 1;
                    } else if (a._date === b._date) {
                        return 0;
                    } else {
                        return -1;
                    }
                });
                this.emitPathSubject();
            }, error => {
                console.log(error.message);
            }
        );
    }

    emitPathSubject(): void {
        this.pathSubject.next(this.allPath.slice());
    }
}
