import {Component, Input, OnInit} from '@angular/core';
import {PathModel} from '../model/Path.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-path',
    templateUrl: './path.component.html',
    styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {
    @Input() path: PathModel;
    @Input() border: boolean;
    @Input() classList: Array<string>;
    style: {};

    constructor(private router: Router) {
    }

    ngOnInit(): void {

    }

    getTime(): string {
        function dateDiff(date1, date2): { sec, min, hour, day } {
            const diff2 = {sec: null, min: null, hour: null, day: null};
            let tmp2 = date2 - date1;

            tmp2 = Math.floor(tmp2 / 1000);
            diff2.sec = tmp2 % 60;

            tmp2 = Math.floor((tmp2 - diff2.sec) / 60);
            diff2.min = tmp2 % 60;


            tmp2 = Math.floor((tmp2 - diff2.min) / 60);
            diff2.hour = tmp2 % 24;


            tmp2 = Math.floor((tmp2 - diff2.hour) / 24);
            diff2.day = tmp2;

            return diff2;
        }

        const time = dateDiff(this.path._date, Date.now());


        if (time.day) {
            if (time.day > 365) {
                const t = Math.floor(time.day / 365);
                return t + 'y ';
            } else if (time.day > 60) {
                const t = Math.floor(time.day / 30);
                return t + 'm ';
            } else {
                return time.day + 'd';
            }
        } else if (time.hour) {
            return time.hour + 'h';
        } else if (time.min) {
            return time.min + 'min ';
        } else {
            return 'à l\'instant';
        }
    }

    mouseEnter(): void {
        if (this.border) {
            this.style = {border: '2px solid #777'};
        }
    }

    mouseLeave(): void {
        if (this.border) {
            this.style = {border: '2px solid #DDD'};
        }
    }
}
