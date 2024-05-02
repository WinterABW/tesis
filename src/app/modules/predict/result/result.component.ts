import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{
  @Input() valor:number=0
  risk?:string

  ngOnInit(){
    this.risk = this.calcRisk()
    console.log(this.valor);
    
  }

  calcRisk(): string {
    if (this.valor <= 0.199)
      return 'Bajo'
    else if (this.valor > 0.199 && this.valor <= 0.48)
      return 'Medio'
    else
      return 'Alto'
  }

}
