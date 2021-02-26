import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResourceModel} from '../model/Resource.model';
import {AppService} from './app.service';

@Injectable({
    providedIn: 'root'
})
export class ResourceService {
    private URL = 'http://localhost:3000/api/module';

    constructor(private http: HttpClient,
                private app: AppService) {
    }

    deleteResource(resource: ResourceModel): Observable<any> {
        const param = new HttpParams().append('idUser', sessionStorage.getItem('idUser'));
        const header = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
        return this.http.delete<any>(`${this.app.URL}'/path', this.route.snapshot.paramMap.get('idPath')/${resource._idModule}/${resource._idResource}`, {headers: header, params: param});

    }

}
