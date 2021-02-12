import {Component, OnInit} from '@angular/core';
import {PathModel} from '../model/Path.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {PathService} from '../services/path.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-view-one-path',
    templateUrl: './view-one-path.component.html',
    styleUrls: ['./view-one-path.component.css']
})
export class ViewOnePathComponent implements OnInit {
    path: PathModel;
    pathSubscription: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private tosatr: ToastrService,
                private pathService: PathService) {
    }

    ngOnInit(): void {
        this.pathService.getOnePath(this.route.snapshot.paramMap.get('idPath'));
        this.pathSubscription = this.pathService.onePathSubject.subscribe(
            (path: PathModel) => {
                this.path = path;
            }
        );
        this.pathService.emitOnePathSubject();
    }

    onCreateModule(): void {
        this.router.navigate(['path', this.route.snapshot.paramMap.get('idPath'), 'create-module']);
    }
}
