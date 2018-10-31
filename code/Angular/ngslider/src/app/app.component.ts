import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngslider';
  public inputSpeedRange = [100];
  public configuration: any = {
  behaviour: 'tap-drag',
  start:100,
  step:1,
  connect: [true, false],
  tooltips: true,
  margin: 1,
  
  range: {
    min: 0,
    max: 100
  },
  pips: {
    mode: 'steps',
     values: [0, 25, 50, 75, 100],
    density: 4
  }
};
	displayrange(){
		console.log(this.inputSpeedRange);
	}

}
