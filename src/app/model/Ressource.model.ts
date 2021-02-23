import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class RessourceModel {
    private idModule: string;
    private idRessource: string;
    private url: string;
    private title: string;
    private description: string;

    constructor(idModule: string, idRessource: string, url: string, title: string, description: string) {
        this.idModule = idModule;
        this.idRessource = idRessource;
        this.url = url;
        this.title = title;
        this.description = description;
    }

    get _idModule(): string {
        return this.idModule;
    }

    set _idModule(value: string) {
        this.idModule = value;
    }

    get _idRessource(): string {
        return this.idRessource;
    }

    set _idRessource(value: string) {
        this.idRessource = value;
    }

    get _url(): string {
        return this.url;
    }

    set _url(value: string) {
        this.url = value;
    }

    get _title(): string {
        return this.title;
    }

    set _title(value: string) {
        this.title = value;
    }

    get _description(): string {
        return this.description;
    }

    set _description(value: string) {
        this.description = value;
    }
}
