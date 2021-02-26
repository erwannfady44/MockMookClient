import {Component, Input, OnInit} from '@angular/core';
import {ResourceModel} from '../model/Resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
    @Input() resource: ResourceModel;

  constructor() { }

  ngOnInit(): void {
  }

}
