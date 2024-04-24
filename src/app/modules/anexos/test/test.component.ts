import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { afirmaciones } from './afirmations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  @ViewChildren('select') selectores!: QueryList<ElementRef>;

  afirmaciones = afirmaciones

  respuestas: string[] = new Array(afirmaciones.length).fill('0');

  checkData() {
    const index = this.respuestas.findIndex(respuesta => respuesta === '0');

    if (index !== -1 && this.selectores.toArray()[index])
      this.selectores.toArray()[index].nativeElement.focus();
    else
      this.calcularPuntuacion();
  }

  calcularPuntuacion() {
    let puntuacionTotal: number = 0;
    for (let respuesta of this.respuestas)
      if (respuesta !== '0')
        puntuacionTotal += parseFloat(respuesta);
    puntuacionTotal -= 20;
    alert(puntuacionTotal);
  }
}