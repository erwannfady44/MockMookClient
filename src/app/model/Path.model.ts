import {Injectable} from '@angular/core';
import {ClassModel} from './Class.model';

@Injectable({providedIn: 'root'})

export class PathModel {
    private title: string;
    private description: string;
    private pseudoCreator: string;
    private idPath: string;
    private date: Date;
    private classes: Array<ClassModel>;

    constructor(title: string, description: string, pseudoCreator: string, idPath: string, date: Date) {
        this.title = title;
        this.description = description;
        this.pseudoCreator = pseudoCreator;
        this.idPath = idPath;
        this.date = date;
        this.classes = new Array<ClassModel>();
    }


    get _classes(): Array<ClassModel> {
        return this.classes;
    }

    set _classes(value: Array<ClassModel>) {
        this.classes = value;
    }

    addClass(Class: ClassModel): void {
        this.classes.push(Class);
    }

    get _date(): Date {
        return this.date;
    }

    set _date(value: Date) {
        this.date = value;
    }

    get _idPath(): string {
        return this.idPath;
    }

    set _idPath(value: string) {
        this.idPath = value;
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


    get _pseudoCreator(): string {
        return this.pseudoCreator;
    }

    set _pseudoCreator(value: string) {
        this.pseudoCreator = value;
    }
}
