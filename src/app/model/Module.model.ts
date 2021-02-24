import {Injectable} from '@angular/core';
import {ResourceModel} from './Resource.model';


@Injectable({providedIn: 'root'})
export class ModuleModel {
    private idPath: string;
    private pseudo: string;
    private title: string;
    private description: string;
    private idModule: string;
    private resource: Array<ResourceModel>;

    constructor(idPath: string, idCreator: string, title: string, description: string) {
        this.idPath = idPath;
        this.pseudo = idCreator;
        this.title = title;
        this.description = description;
        this.resource = new Array<ResourceModel>();
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

    addResource(resource: ResourceModel): void {
        this.resource.push(resource);
    }
}
