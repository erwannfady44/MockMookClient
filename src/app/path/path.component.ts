import {Component, Input, OnInit} from '@angular/core';
import {PathModel} from '../model/Path.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../services/app.service';
import {TagModel} from '../model/Tag.model';
import {TagService} from '../services/tag.service';

@Component({
    selector: 'app-path',
    templateUrl: './path.component.html',
    styleUrls: ['./path.component.css']
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

    getTime(): string {
        return this.app.dateDiff(this.path._date, Date.now());
    }

    mouseEnter(): void {
        if (this.border) {
            this.style = {border: '2px solid #777'};
        }
    }

    mouseLeave(): void {
        if (this.border) {
            this.style = {border: '2px solid #DDD'};
        }
    }

    async createTag(): Promise<any> {
        const tmp = this.tags.replace(' ', '');
        const t = tmp.split('#');
        if (this.tags.length >= 4) {
            this.tagList = await this.tagService.getTagByKeyWords(t, this.route.snapshot.paramMap.get('idPath'));
        } else {
            this.tagList = [];
        }
    }

    addTag(tag: TagModel): void {
        console.log(this.path._tags);
        this.path._tags.push(tag);
        this.tagList = [];
    }
}
