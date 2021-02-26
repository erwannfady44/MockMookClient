import {Component, OnInit} from '@angular/core';
import {ResourceModel} from '../model/Resource.model';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {ResourceService} from '../services/resource.service';

@Component({
    selector: 'app-view-one-resource',
    templateUrl: './view-one-resource.component.html',
    styleUrls: ['./view-one-resource.component.scss']
})
export class ViewOneResourceComponent implements OnInit {
    resource: ResourceModel;
    clone: boolean;
    canEdit: boolean;
    edit: boolean;


    constructor(private toastr: ToastrService,
                private router: Router,
                private resourceService: ResourceService,
                public route: ActivatedRoute) {
    }

    async ngOnInit(): Promise<any> {
        // tslint:disable-next-line:max-line-length
        this.resource = await this.resourceService.getOneResource( this.route.snapshot.paramMap.get('idModule'), this.route.snapshot.paramMap.get('idResource'));
    }

    onValidated(): void {
        this.edit = false;
    }

    deleteResource(): void {
        this.resourceService.deleteResource(this.resource).subscribe(
            () => {
                this.toastr.success('resource supprimé avec succès');
                this.router.navigate(['/path', this.route.snapshot.queryParamMap.get('idPath')]);
            }, error => {
                this.toastr.error(error.message);
            }
        );
    }

}
