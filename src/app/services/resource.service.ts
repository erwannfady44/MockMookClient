import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ResourceService {
    private URL = 'http://localhost:3000/api/module';

    constructor(private http: HttpClient) {
    }

}
