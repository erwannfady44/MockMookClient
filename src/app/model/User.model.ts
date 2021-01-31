import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserModel {
  private id: string;
  private pseudo: string;
  private password: string;
  private status: number;
  private connect: boolean;

 constructor() {
  }


  get _id(): string {
    return this.id;
  }

  set _id(value: string) {
    this.id = value;
  }

  get _pseudo(): string {
    return this.pseudo;
  }

  set _pseudo(value: string) {
    this.pseudo = value;
  }

  get _password(): string {
    return this.password;
  }

  set _password(value: string) {
    this.password = value;
  }

  get _status(): number {
    return this.status;
  }

  set _status(value: number) {
    this.status = value;
  }

  get _connect(): boolean {
    return this.connect;
  }

  set _connect(value: boolean) {
    this.connect = value;
  }
}
