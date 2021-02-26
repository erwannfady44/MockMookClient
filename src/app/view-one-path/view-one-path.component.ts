import {Component, OnInit} from '@angular/core';
import {PathModel} from '../model/Path.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {PathService} from '../services/path.service';
import {ModuleModel} from '../model/Module.model';

@Component({
    selector: 'app-view-one-path',
    templateUrl: './view-one-path.component.html',
    styleUrls: ['./view-one-path.component.css']
})
export class ViewOnePathComponent implements OnInit {
    path: PathModel;
    edit: boolean;
    canEdit: boolean;

    constructor(public route: ActivatedRoute,
                private router: Router,
                private tosatr: ToastrService,
                private pathService: PathService) {
    }

    async ngOnInit(): Promise<any> {
        this.path = await this.pathService.getOnePath(this.route.snapshot.paramMap.get('idPath'));
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
        if (!this.edit) {
            this.router.navigate(['path', this.path._idPath, module._idModule]);
        }
    }
}
