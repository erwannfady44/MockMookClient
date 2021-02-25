import {Injectable} from '@angular/core';
import {ModuleModel} from './Module.model';

@Injectable({providedIn: 'root'})

export class PathModel {
    private title: string;
    private description: string;
    private pseudoCreator: string;
    private idCreator: string;
    private idPath: string;
    private date: Date;
    private modules: Array<ModuleModel>;

    constructor(title: string, description: string, idCreator: string, pseudoCreator: string, idPath: string, date: Date) {
        this.title = title;
        this.description = description;
        this.idCreator = idCreator;
        this.pseudoCreator = pseudoCreator;
        this.idPath = idPath;
        this.date = date;
        this.modules = new Array<ModuleModel>();
    }


    get _idCreator(): string {
        return this.idCreator;
    }

    set _idCreator(value: string) {
        this.idCreator = value;
    }

    get _modules(): Array<ModuleModel> {
        return this.modules;
    }

    set _modules(value: Array<ModuleModel>) {
        this.modules = value;
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

    addModule(module: ModuleModel): void {
        this.modules.push(module);
    }
}
