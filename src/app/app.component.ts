import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: String = "Retro Bar Code"
    colorArray = ['Aqua', 'BlueViolet', 'Chartreuse', 'Gold', 'Indigo', 'Lime', 'OrangeRed'];
}
