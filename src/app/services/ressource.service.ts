import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RessourceService {
    private URL = 'http://localhost:3000/api/class';

    constructor(private http: HttpClient) {
    }

}
