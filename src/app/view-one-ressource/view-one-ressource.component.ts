import { Component, OnInit } from '@angular/core';
import {ResourceModel} from '../model/Resource.model';

@Component({
  selector: 'app-view-one-ressource',
  templateUrl: './view-one-ressource.component.html',
  styleUrls: ['./view-one-ressource.component.scss']
})
export class ViewOneRessourceComponent implements OnInit {
    ressource: ResourceModel;

  constructor() { }

  ngOnInit(): void {
  }

}
