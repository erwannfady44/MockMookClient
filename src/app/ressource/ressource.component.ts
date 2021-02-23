import {Component, Input, OnInit} from '@angular/core';
import {RessourceModel} from '../model/Ressource.model';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {
    @Input() ressource: RessourceModel;

  constructor() { }

  ngOnInit(): void {
  }

}
