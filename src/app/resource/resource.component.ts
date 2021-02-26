import {Component, Input, OnInit} from '@angular/core';
import {ResourceModel} from '../model/Resource.model';
import {Variables} from '../variables';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
    @Input() resource: ResourceModel;

  constructor(private app: Variables) { }

  ngOnInit(): void {
  }

  getTime(): string {
      return this.app.dateDiff(this.resource._date, Date.now());
  }

}
