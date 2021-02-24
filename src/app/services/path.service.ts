import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PathModel} from '../model/Path.model';
import {Observable, Subject} from 'rxjs';
import {ModuleModel} from '../model/Module.model';

@Injectable({
    providedIn: 'root'
})
export class PathService {
    private URL = 'http://localhost:3000/api';
    private allPath = Array<PathModel>();
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

    async getAllPath(): Promise<any> {
        return new Promise(resolve => this.http.get<any>(`${this.URL}/path/`).subscribe(
            res => {
                this.allPath = [];
                if (res.json) {
                    res.json.forEach(path => {
                        this.allPath.push(new PathModel(path.title, path.description, path.pseudo, path.idPath, new Date(path.date)));
                    });
                    this.allPath.sort((a, b) => {
                        if (a._date > b._date) {
                            return -1;
                        } else if (a._date < b._date) {
                            return 1;
                        } else {
                            return 0;
                        }
                    });
                }
                resolve(this.allPath);
            }, error => {
                console.log(error.message);
            }
        ));
    }

    async getOnePath(idPath: string): Promise<any> {
        return new Promise(resolve => this.http.get<any>(`${this.URL}/path/${idPath}`).subscribe(
            res => {
                this.path = new PathModel(res.title, res.description, res.pseudo, res.idPath, new Date(res.date));
                if (res.modules) {
                    res.modules.forEach((module) => {
                        const m = new ModuleModel(res.idPath, module.pseudo, module.title, module.description);
                        m._idModule = module.idModule;
                        this.path.addModule(m);
                    });
                }
                resolve(this.path);
            }, error => {
                console.log(error.message);
            }
        ));
    }
}
