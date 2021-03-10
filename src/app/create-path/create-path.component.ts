import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {PathService} from '../services/path.service';
import {NgForm} from '@angular/forms';
import {TagModel} from '../model/Tag.model';
import {TagService} from '../services/tag.service';

@Component({
    selector: 'app-create-path',
    templateUrl: './create-path.component.html',
    styleUrls: ['./create-path.component.scss']
})
export class CreatePathComponent implements OnInit {
    tags: string;
    tagList: Array<TagModel>;
    pathTag: Array<TagModel>;

    constructor(private router: Router,
                private toastr: ToastrService,
                private pathService: PathService,
                private tagService: TagService) {
    }

    ngOnInit(): void {
        this.pathTag = new Array<TagModel>();
        this.tags = '#';
    }

    onSubmit(form: NgForm): void {
        const tags = [];
        if (this.tags) {

            const tmp = this.tags.replace(' ', '');
            const t = tmp.split('#');
            t.splice(0, 1);
            t.forEach(tag => {
                tags.push(new TagModel(tag));
            });
        }

        this.pathService.createPath(form.value.title, form.value.description, tags)
            .subscribe((res) => {
                this.toastr.success('Le parcours ' + form.value.title + ' a été créé avec succès !', 'Créé avec succès');
                this.router.navigate(['']);
            }, error => {
                this.toastr.error(error.message, 'Erreur');
                switch (error.status) {
                    case 401:
                        this.toastr.error();
                        this.router.navigate(['/login']);
                }
            });
    }

    async createTag(): Promise<any> {
        if (this.tags.includes(' ', this.tags.length - 1)) {
            this.tags += '#';
        }
        const tmp = this.tags.replace(' ', '');
        let t = tmp.split('#');
        const pathTagName = [];

        this.pathTag.forEach(thePathTag => pathTagName.push(thePathTag._name));

        t.splice(0, 1);


        t.forEach(theTag => {
            if (pathTagName.includes(theTag)) {
                t = t.filter(item => item !== (theTag));
            }
        });

        if (t.length > 1) {
            this.pathTag.push(new TagModel(t[0]));
            t.splice(0, 1);
        }

        if (this.tags.length >= 4) {
            this.tagList = await this.tagService.getTagByKeyWords(t, null);
        } else {
            this.tagList = [];
        }
    }

    addTag(tag: TagModel): void {
        this.pathTag.push(tag);
        this.tags = '';
        this.pathTag.forEach(t => {
            this.tags += '#';
            this.tags += t._name;
            this.tags += ' ';
        });
        this.tagList = [];
    }

}
