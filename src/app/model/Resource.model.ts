import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class ResourceModel {
    private idModule: string;
    private idResource: string;
    private url: string;
    private title: string;
    private description: string;
    private date: Date;

    constructor(idModule: string, url: string, title: string, description: string, date: Date) {
        this.idModule = idModule;
        this.url = url;
        this.title = title;
        this.description = description;
        this.date = date;
    }


    get _date(): Date {
        return this.date;
    }

    set _date(value: Date) {
        this.date = value;
    }

    get _idModule(): string {
        return this.idModule;
    }

    set _idModule(value: string) {
        this.idModule = value;
    }

    get _idResource(): string {
        return this.idResource;
    }

    set _idResource(value: string) {
        this.idResource = value;
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
