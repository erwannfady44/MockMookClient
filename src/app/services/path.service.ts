import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {PathModel} from '../model/Path.model';
import {Observable} from 'rxjs';
import {ModuleModel} from '../model/Module.model';
import {AppService} from './app.service';
import {TagModel} from '../model/Tag.model';

@Injectable({
    providedIn: 'root'
})
export class PathService {
    private allPath = Array<PathModel>();
    private path: PathModel;

    constructor(private http: HttpClient,
                private app: AppService) {
    }

    createPath(title: string, description: string, tagList: Array<TagModel>): Observable<any> {
        const path = new PathModel(title,
            description,
            sessionStorage.getItem('idUser'),
            sessionStorage.getItem('pseudo'),
            '',
            null,
            new Array<TagModel>()
        );

        const params = {
            idUser: sessionStorage.getItem('idUser'),
            title: path._title,
            description: path._description,
            tags: tagList
        };
        return this.http.put<any>(`${this.app.URL}/path/`, params, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        });
    }

    async getAllPath(): Promise<any> {
        return new Promise(resolve => this.http.get<any>(`${this.app.URL}/path/`).subscribe(
            res => {
                this.allPath = [];
                if (res.json) {
                    res.json.forEach(path => {
                        const tags = [];
                        path.tags.forEach(tag => {
                            if (tag) {
                                const t = new TagModel(tag.name);
                                t._idTag = tag._id;
                                tags.push(t);
                            }
                        });

                        this.allPath.push(new PathModel(
                            path.title,
                            path.description,
                            path.idCreator,
                            path.pseudo,
                            path.idPath,
                            new Date(path.date),
                            tags
                        ));
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
        return new Promise(resolve => this.http.get<any>(`${this.app.URL}/path/${idPath}`).subscribe(
            res => {
                this.path = new PathModel(
                    res.title, res.description,
                    res.idCreator,
                    res.pseudo,
                    res.idPath,
                    new Date(res.date),
                    new Array<TagModel>());
                if (res.modules.length > 0) {
                    res.modules.forEach((module) => {
                        const m = new ModuleModel(res.idPath,
                            module.idCreator,
                            module.pseudo,
                            module.title,
                            module.description,
                            module.date);
                        m._idModule = module._id;
                        m._position = module.position;
                        this.path.addModule(m);
                    });
                    this.path._modules.sort((a, b) => {
                        return a._position - b._position;
                    });
                }
                if (res.tags.length > 0) {
                    res.tags.forEach(tag => {
                        this._path.addTag(new TagModel(tag.name));
                    });
                }
                resolve(this.path);
            }, error => {
                console.log(error.message);
            }
        ));
    }

    deletePath(idPath: string): Observable<any> {
        const param = new HttpParams().append('idUser', sessionStorage.getItem('idUser'));
        const header = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
        return this.http.delete<any>(`${this.app.URL}/path/${idPath}`, {headers: header, params: param});
    }

    editPath(): Observable<any> {
        const params = {
            idUser: sessionStorage.getItem('idUser'),
            path: this._path
        };
        return this.http.post<any>(`${this.app.URL}/path/${this._path._idPath}`, params, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        });
    }


    get _allPath(): PathModel[] {
        return this.allPath;
    }

    set _allPath(value: PathModel[]) {
        this.allPath = value;
    }


    get _path(): PathModel {
        return this.path;
    }

    set _path(value: PathModel) {
        this.path = value;
    }
}
