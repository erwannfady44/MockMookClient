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
    border: {};
    allPath: Array<PathModel>;

    constructor(private pathService: PathService,
                private toastr: ToastrService) {
    }

    async ngOnInit(): Promise<any> {
        await this.pathService.getAllPath();
        this.allPath = this.pathService._allPath;
    }
}
