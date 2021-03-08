import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

    URL = 'http://localhost:3000/api';


    dateDiff(d1, d2): string {
        const diff2 = {sec: null, min: null, hour: null, day: null};
        d1 = new Date(d1);
        let tmp2 = d2 - d1;

        tmp2 = Math.floor(tmp2 / 1000);
        diff2.sec = tmp2 % 60;

        tmp2 = Math.floor((tmp2 - diff2.sec) / 60);
        diff2.min = tmp2 % 60;


        tmp2 = Math.floor((tmp2 - diff2.min) / 60);
        diff2.hour = tmp2 % 24;


        tmp2 = Math.floor((tmp2 - diff2.hour) / 24);
        diff2.day = tmp2;


        if (diff2.day) {
            if (diff2.day > 365) {
                const t = Math.floor(diff2.day / 365);
                return t + 'y ';
            } else if (diff2.day > 60) {
                const t = Math.floor(diff2.day / 30);
                return t + 'm ';
            } else {
                return diff2.day + 'd';
            }
        } else if (diff2.hour) {
            return diff2.hour + 'h';
        } else if (diff2.min) {
            return diff2.min + 'min ';
        } else {
            return 'à l\'instant';
        }
    }
}
