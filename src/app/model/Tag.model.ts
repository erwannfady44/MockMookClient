//
// ############################################################# Tag modèle ###########################################################
// Déclaration du modèle "Tag" avec ses différentes méthodes. (getters et setters)
//

import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class TagModel {
    private idTag: string;
    private name: string;

    constructor(name) {
        this.name = name;
    }

    get _idTag(): string {
        return this.idTag;
    }

    set _idTag(value) {
        this.idTag = value;
    }

    get _name(): string {
        return this.name;
    }

    set _name(value) {
        this.name = value;
    }
}
