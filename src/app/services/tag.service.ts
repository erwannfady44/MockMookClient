import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {TagModel} from '../model/Tag.model';
import {ModuleModel} from '../model/Module.model';
import {AppService} from './app.service';

@Injectable({
    providedIn: 'root'
})
export class TagService {

    constructor(private http: HttpClient,
                private app: AppService) {
    }

    getTagByKeyWords(tags: Array<string>, idPath: string): Promise<any> {
        const params = new HttpParams()
            .append('keyWords', tags.join(' '));

        if (idPath) {
            params.append('idPath', idPath);
        }

        return new Promise(resolve => this.http.get<any>(`${this.app.URL}/tag/findByKeyWords`, {params}).subscribe(
            res => {
                const allTags = [];
                res.forEach(tag => {
                    const t = new TagModel(tag.name);
                    t._idTag = tag.idTag;
                    allTags.push(t);
                });
                resolve(allTags);
            }, error => {
                console.log(error);
            }
        ));
    }
}
