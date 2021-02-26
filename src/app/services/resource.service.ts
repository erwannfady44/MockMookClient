import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResourceModel} from '../model/Resource.model';
import {ActivatedRoute} from '@angular/router';
import {AppService} from './app.service';


@Injectable({
    providedIn: 'root'
})
export class ResourceService {
    private resource: ResourceModel;

    constructor(public route: ActivatedRoute,
                private http: HttpClient,
                private app: AppService) {
    }

    async getOneResource(idModule: string, idResource: string): Promise<any> {
        return new Promise(resolve => this.http.get<any>(`${this.app.URL}'/path', ${this.route.snapshot.paramMap.get('idPath')}/${idModule}/${idResource}`).subscribe(
            res => {
                this.resource = new ResourceModel(res.idModule, res.idCreator, res.pseudo, res.url, res.title, res.description, res.date);
                this.resource._idResource = res.idResource;
                resolve(this.resource);
            }, error => {
                console.log(error);
            }
        ));
    }

    clone(resource: ResourceModel, idModule: string): Observable<any> {
        const params = {
            idModule: resource._idResource,
            idUser: sessionStorage.getItem('idUser')
        };

        return this.http.post<any>(`${this.app.URL}/path/${this.route.snapshot.paramMap.get('idPath')}/${idModule}/${resource._idResource}/clone`, params, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        });
    }

    deleteResource(resource: ResourceModel): Observable<any> {
        const param = new HttpParams().append('idUser', sessionStorage.getItem('idUser'));
        const header = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
        return this.http.delete<any>(`${this.app.URL}'/path', ${this.route.snapshot.paramMap.get('idPath')}/${resource._idModule}/${resource._idResource}`, {
            headers: header,
            params: param
        });

    }

}
