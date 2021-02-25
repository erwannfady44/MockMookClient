import {Injectable} from '@angular/core';
import {ResourceModel} from './Resource.model';


@Injectable({providedIn: 'root'})
export class ModuleModel {
    private idPath: string;
    private idCreator: string;
    private pseudo: string;
    private title: string;
    private description: string;
    private idModule: string;
    private resource: Array<ResourceModel>;
    private position: number;
    private date: Date;

    constructor(idPath: string, idCreator: string, pseudo: string, title: string, description: string, date: Date) {
        this.idPath = idPath;
        this.idCreator = idCreator;
        this.pseudo = pseudo;
        this.title = title;
        this.description = description;
        this.resource = new Array<ResourceModel>();
        this.date = date;
    }

    get _idCreator(): string {
        return this.idCreator;
    }

    set _idCreator(value: string) {
        this.idCreator = value;
    }

    get _position(): number {
        return this.position;
    }

    set _position(value: number) {
        this.position = value;
    }

    addResource(resource: ResourceModel): void {
        this.resource.push(resource);
    }

    get _resources(): Array<ResourceModel> {
        return this.resource;
    }

    set _resources(value: Array<ResourceModel>) {
        this.resource = value;
    }

    get _idPath(): string {
        return this.idPath;
    }

    set _idPath(value: string) {
        this.idPath = value;
    }

    get _pseudo(): string {
        return this.pseudo;
    }

    set _pseudo(value: string) {
        this.pseudo = value;
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


    get _idModule(): string {
        return this.idModule;
    }

    set _idModule(value: string) {
        this.idModule = value;
    }

    get _date(): Date {
        return this.date;
    }

    set _date(date: Date) {
        this.date = date;
    }
}
