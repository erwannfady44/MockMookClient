import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {
    @Input() title: string;
    @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
