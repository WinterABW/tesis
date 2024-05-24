import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent {
  table: boolean = false;

  handler(view: string) {
    if (view === 'table') this.table = false;
    else this.table = true;
  }
}
