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

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        console.log(typeof this.path._date);
    }

    onViewOnPath(): void {
        this.router.navigate(['path/', this.path._idPath]);
    }

    getTime(): string {
        function dateDiff(date1, date2): { sec, min, hour, day } {
            const diff = {sec: null, min: null, hour: null, day: null};
            let tmp = date2 - date1;

            tmp = Math.floor(tmp / 1000);
            diff.sec = tmp % 60;

            tmp = Math.floor((tmp - diff.sec) / 60);
            diff.min = tmp % 60;


            tmp = Math.floor((tmp - diff.min) / 60);
            diff.hour = tmp % 24;


            tmp = Math.floor((tmp - diff.hour) / 24);
            diff.day = tmp;

            if (diff.day) {
                diff.day += 'j';
            } else if (diff.hour) {
                diff.hour += 'h';
            } else if (diff.min) {
                diff.min += 'min';
            } else {
                diff.sec += 'sec';
            }

            return diff;
        }


        const time = dateDiff(this.path._date, Date.now());
        console.log(time);

        return time.day ? time.day : time.hour ? time.hour : time.min;
    }
}
