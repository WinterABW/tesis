import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})

export class PredictComponent {
  result: number = 0
  resValor($result: any) {   
    this.result = $result
  }

}
