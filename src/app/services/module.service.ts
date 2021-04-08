import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ModuleModel} from '../model/Module.model';
import {Observable} from 'rxjs';
import {ResourceModel} from '../model/Resource.model';
import {AppService} from './app.service';

@Injectable({
    providedIn: 'root'
})

export class ModuleService {
    private module: ModuleModel;

    constructor(private http: HttpClient,
                private app: AppService) {
    }

    createModule(module: ModuleModel): Observable<any> {
        const params = {
            idPath: module._idPath,
            title: module._title,
            description: module._description,
            idUser: sessionStorage.getItem('idUser')
        };
        return this.http.put<any>(`${this.app.URL}/path/${module._idPath}/module`, params, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        });
    }

    async getOneModule(idPath: string, idModule: string): Promise<any> {
        // Appel http en get pour récupérer le json
        return new Promise(resolve => this.http.get<any>(`${this.app.URL}/path/${idPath}/${idModule}`).subscribe(
            res => {
                // Création du nouveau module avec le json renvoyé
                this.module = new ModuleModel(res.idPath, res.idCreator, res.pseudo, res.title, res.description, res.date);
                this.module._idModule = res.idModule;
                this.module._pseudo = res.pseudo;
                // Ajout des ressources s'il y en a
                if (res.resources) {
                    // Pour chaque ressource, on crée une ressource et on l'ajoute au module
                    res.resources.forEach(resource => {
                        const r = new ResourceModel(this.module._idModule,
                            resource.idCreator,
                            resource.pseudo,
                            resource.url,
                            resource.title,
                            resource.description,
                            res.date
                        );
                        r._idResource = resource.idResource;
                        this.module.addResource(r);
                    });
                }
                // Renvoie le module
                resolve(this.module);
            }, error => {
                console.log(error);
            }
        ));
    }

    addResource(resource: ResourceModel): Observable<any> {
        const params = {
            idModule: resource._idModule,
            title: resource._title,
            description: resource._description,
            url: resource._url,
            idUser: sessionStorage.getItem('idUser')
        };

        return this.http.put<any>(`${this.app.URL}/module/${resource._idModule}/resource`, params, {
                headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
            }
        );
    }

    searchByKeyWords(idPath: string, keyWords: Array<string>): Promise<any> {
        const params = new HttpParams()
            .append('keyWords', keyWords.join(', '))
            .append('idPath', idPath);
        return new Promise(resolve => this.http.get<any>(`${this.app.URL}/module/findByKeyWords`, {params}).subscribe(
            res => {
                const modules = [];
                res.json.forEach(module => {
                    const m = new ModuleModel(module.idPath, module.idCreator, '', module.title, module.description, module.date);
                    m._idModule = module.idModule;
                    m._idPath = module.idPath;
                    modules.push(m);
                });
                resolve(modules);
            }, error => {
                console.log(error);
            }
        ));
    }

    clone(module: ModuleModel, idPath: string): Observable<any> {
        const params = {
            idModule: module._idModule,
            idUser: sessionStorage.getItem('idUser'),
            idPath2: idPath
        };

        return this.http.post<any>(`${this.app.URL}/path/${module._idPath}/${module._idModule}/clone`, params, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        });
    }

    deleteModule(module: ModuleModel): Observable<any> {
        const param = new HttpParams().append('idUser', sessionStorage.getItem('idUser'));
        const header = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
        return this.http.delete<any>(`${this.app.URL}/path/${module._idPath}/${module._idModule}`, {
            headers: header,
            params: param
        });

    }

}
