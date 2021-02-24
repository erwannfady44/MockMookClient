import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ModuleModel} from '../model/Module.model';
import {Observable} from 'rxjs';
import {ResourceModel} from '../model/Resource.model';
import {Variables} from '../variables';

@Injectable({
    providedIn: 'root'
})

export class ModuleService {
    private module: ModuleModel;

    constructor(private http: HttpClient,
                private app: Variables) {
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
                .set('Content-Type', 'application/x-www-form-urlencoded')

        });
    }

    async getOneModule(idPath: string, idModule: string): Promise<any> {
        return new Promise(resolve => this.http.get<any>(`${this.app.URL}/path/${idPath}/${idModule}`, {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        }).subscribe(
            res => {
                this.module = new ModuleModel(res.idPath, res.idCreator, res.title, res.description);
                this.module._idModule = res.idModule;
                this.module._pseudo = res.pseudo;
                if (res.resources) {
                    res.resources.forEach(resource => {
                        const r = new ResourceModel(this.module._idModule, resource.url, resource.title, resource.description);
                        r._idResource = resource.idResource;
                        this.module.addResource(r);
                    });
                }
                resolve(this.module);
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

        return this.http.put<any>(`${this.app.URL}/path/${resource._idModule}/resource`, params, {
                headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
                    .set('Content-Type', 'application/x-www-form-urlencoded')

            }
        );
    }
}
