import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name: string = "ekta"
   value: number;
   date: Date;

onstructor() { }



ngOnInit() {
	this.value = 52.36;
	this.date = new Date;
	
	}
}