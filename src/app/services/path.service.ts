import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PathModel} from '../model/Path.model';
import {Observable, Subject} from 'rxjs';
import {ClassModel} from '../model/Class.model';

@Injectable({
    providedIn: 'root'
})
export class PathService {
    private URL = 'http://localhost:3000/api';
    private allPath = Array<PathModel>();
    allPathSubject = new Subject<PathModel[]>();
    onePathSubject = new Subject<PathModel>();
    private path: PathModel;

    constructor(private http: HttpClient) {
    }

    createPath(title: string, description: string): Observable<any> {
        const path = new PathModel(title, description, sessionStorage.getItem('pseudo'), '', null);

        const params = {
            idUser: sessionStorage.getItem('idUser'),
            title: path._title,
            description: path._description
        };
        return this.http.put<any>(`${this.URL}/path/`, params, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        });
    }

    getAllPath(): void {
        this.http.get<any>(`${this.URL}/path/`).subscribe(
            res => {
                this.allPath = [];
                res.json.forEach(path => {
                    this.allPath.push(new PathModel(path.title, path.description, path.pseudo, path.idPath, null));
                });
                this.emitAllPathSubject();
            }, error => {
                console.log(error.message);
            }
        );
    }

    getOnePath(idPath: string): void {
        this.http.get<any>(`${this.URL}/path/${idPath}`).subscribe(
            res => {
                this.path = new PathModel(res.title, res.description, res.pseudo, res.idPath, res.date);
                res.classes.forEach((Class) => {
                   this.path.addClass(new ClassModel(res.idPath, Class.pseudo, Class.title, Class.description));
                });
                this.emitOnePathSubject();
            }, error => {
                console.log(error.message);
            }
        );
    }

    emitAllPathSubject(): void {
        this.allPathSubject.next(this.allPath.slice());
    }

    emitOnePathSubject(): void {
        this.onePathSubject.next(this.path);
    }
}
