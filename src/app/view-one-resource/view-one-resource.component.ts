import { Component, OnInit } from '@angular/core';
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
                private ressourceService: ResourceService,
                public route: ActivatedRoute) {
    }

  ngOnInit(): void {
  }

}
