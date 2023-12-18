import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
template: '<div class="alert alert-success" [ngClass]="{fadeOut: displaynotification} ">This website is uses cookies to provide better user experience.<div class="close"><button class="btn" (click)= "closeNotification()">x</button></div> </div>',

  styles: ["div{margin: 10px 0px; padding: 10px 20px; text-align: center;}","p{font-size:14px;}", ".close{float: right; margin-top:-15px;}", ".fadeOut{visibility: hidden; opacity:0;transition: visibility 0s 2s,opacity 2s linear;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displaynotification: boolean = false;
  closeNotification(){
    this.displaynotification=true;
  }

}
