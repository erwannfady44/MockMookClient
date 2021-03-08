import {Component, OnInit} from '@angular/core';
import {PathModel} from '../model/Path.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {PathService} from '../services/path.service';
import {ModuleModel} from '../model/Module.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-view-one-path',
    templateUrl: './view-one-path.component.html',
    styleUrls: ['./view-one-path.component.scss']
})
export class ViewOnePathComponent implements OnInit {
    path: PathModel;
    edit: boolean;
    canEdit: boolean;
    class: string;

    constructor(public route: ActivatedRoute,
                private router: Router,
                private tosatr: ToastrService,
                private pathService: PathService) {
    }

    async ngOnInit(): Promise<any> {
        await this.pathService.getOnePath(this.route.snapshot.paramMap.get('idPath'));
        this.path = this.pathService._path;
        if (this.route.snapshot.queryParamMap.get('edit')) {
            this.edit = true;
        }

        if (sessionStorage.getItem('idUser') === this.path._idCreator) {
            this.canEdit = true;
        }
    }

    onViewAllModule(): void {
        this.router.navigate(['/path', this.path._idPath, 'view-all-module']);
    }

    onValidate(): void {
        this.edit = false;
        if (this.path !== this.pathService._path) {
            this.pathService.editPath().subscribe(
                res => {
                    console.log(res);
                }, error => {
                    console.log(error);
                }
            );
        }
    }

    deletePath(): void {
        this.pathService.deletePath(this.path._idPath).subscribe(
            () => {
                this.tosatr.success('Parcours supprimé avec succès');
                this.router.navigate(['']);
            }, error => {
                this.tosatr.error(error.message);
            }
        );
    }

    onViewOnModule(module: ModuleModel): void {
        console.log(module);
        this.router.navigate(['path', this.path._idPath, module._idModule]);
    }

    onEdit(): void {
        this.edit = true;
        this.class = 'unselectable';
    }

    dragAndDrop(event: CdkDragDrop<string[]>): void {
        moveItemInArray(this.path._modules, event.previousIndex, event.currentIndex);
        console.log(this.path._modules);
        let i = 0;
        this.path._modules.forEach(module => {
            module._position = i++;
        });
    }
}
