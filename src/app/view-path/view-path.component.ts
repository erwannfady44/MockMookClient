import {Component, OnInit} from '@angular/core';
import {PathService} from '../services/path.service';
import {PathModel} from '../model/Path.model';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-view-path',
    templateUrl: './view-path.component.html',
    styleUrls: ['./view-path.component.css']
})
export class ViewPathComponent implements OnInit {
    allPath: Array<PathModel>;
    pathSubscription: Subscription;

    constructor(private pathService: PathService,
                private toastr: ToastrService) {
    }

    async ngOnInit(): Promise<any> {
        this.allPath = await this.pathService.getAllPath();
        console.log(this.allPath);

    }

}
