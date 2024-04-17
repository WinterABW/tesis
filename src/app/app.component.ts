import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tesis';
  isDarkMode: boolean = true;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
