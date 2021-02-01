import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ClassesModel {
    private idPath: string;
    private idCreator: string;
    private title: string;
    private description: string;

    get _idPath(): string {
        return this.idPath;
    }

    set _idPath(value: string) {
        this.idPath = value;
    }

    get _idCreator(): string {
        return this.idCreator;
    }

    set _idCreator(value: string) {
        this.idCreator = value;
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
