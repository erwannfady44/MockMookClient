//
// ############################################################### Parcours ################################################################
// Déclaration des méthodes en TypeScript pour un parcours.
//

import {Component, Input, OnInit} from '@angular/core';
import {PathModel} from '../model/Path.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../services/app.service';
import {TagModel} from '../model/Tag.model';
import {TagService} from '../services/tag.service';

@Component({
    selector: 'app-path',
    templateUrl: './path.component.html',
    styleUrls: ['./path.component.scss']
})
export class PathComponent implements OnInit {
    @Input() path: PathModel;
    @Input() border: boolean;
    @Input() classList: Array<string>;
    @Input() edit: boolean;
    style: {};
    tags: string;
    tagList: Array<TagModel>;

    constructor(private router: Router,
                public app: AppService,
                private tagService: TagService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

    // fonction retournant le temps écoulé depuis la dernière modification du parcours
    getTime(): string {
        return this.app.dateDiff(this.path._date, Date.now());
    }

    // fonction permettant de déterminer si la souris de l'utilisateur survole le parcours
    mouseEnter(): void {
        if (this.border) {
            this.style = {border: '2px solid #777'};
        }
    }

    // fonction permettant de déterminer si la souris de l'utilisateur ne survole plus le parcours
    mouseLeave(): void {
        if (this.border) {
            this.style = {border: '2px solid #DDD'};
        }
    }

    // fonction permettant de créer un tag
    async createTag(): Promise<any> {
        const tmp = this.tags.replace(' ', '');
        const t = tmp.split('#');
        if (this.tags.length >= 4) {
            this.tagList = await this.tagService.getTagByKeyWords(t, this.route.snapshot.paramMap.get('idPath'));
        } else {
            this.tagList = [];
        }
    }

    // fonction permettant d'ajouter un tag au parcours
    addTag(tag: TagModel): void {
        this.path._tags.push(tag);
        this.tagList = [];
    }
}
