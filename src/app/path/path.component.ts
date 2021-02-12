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

            if (diff2.day) {
                diff2.day += 'j';
            } else if (diff2.hour) {
                diff2.hour += 'h';
            } else if (diff2.min) {
                diff2.min += 'min';
            } else {
                diff2.sec += 'sec';
            }

            return diff2;
        }

        const time = dateDiff(this.path._date, Date.now());
        console.log(time);
        return time.day ? time.day : time.hour ? time.hour : time.min;
    }
}
