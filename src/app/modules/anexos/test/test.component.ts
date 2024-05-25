import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { afirmaciones } from './afirmations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent{
  afirmaciones = afirmaciones
  respuestas: string[] = new Array(afirmaciones.length).fill('0');
  puntuacionTotal: number = 0;
  showResult:boolean=false
  @ViewChildren('select') selectores!: QueryList<ElementRef>;


  checkData() {
    const index = this.respuestas.findIndex(respuesta => respuesta === '0');
    if (index !== -1 && this.selectores.toArray()[index])
      this.selectores.toArray()[index].nativeElement.focus();
    else
      this.calcularPuntuacion();
  }

  calcularPuntuacion() {
    for (let respuesta of this.respuestas)
      if (respuesta !== '0')
        this.puntuacionTotal += parseFloat(respuesta);
    this.puntuacionTotal -= 20;
    this.showResult=true
  }
}