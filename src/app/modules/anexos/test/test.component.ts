import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  afirmaciones = [
    "Mis creencias me hacen fuerte.",
    "Doy y recibo afecto regularmente.",
    "Tengo una red de amigos y conocidos.",
    "Tengo el peso apropiado para mi estatura.",
    "Asisto regularmente a actividades sociales.",
    "Soy capaz de organizar racionalmente mi tiempo.",
    "Mis ingresos satisfacen mis gastos fundamentales.",
    "Fumo menos de media cajetilla de cigarros al día.",
    "Por lo menos una comida caliente y balanceada al día.",
    "Durante el día dedico a mí mismo un rato de tranquilidad.",
    "Por lo menos una vez a la semana hago algo para divertirme.",
    "Tomo menos de cinco tragos (bebida alcohólica) a la semana.",
    "Por lo menos dos veces a la semana hago ejercicios hasta sudar.",
    "Tengo uno o más amigos a quien confiarle mis problemas personales.",
    "Por lo menos cuatro veces a la semana duermo de siete a ocho horas.",
    "Tomo menos de tres tazas de café (o de té o de refresco de cola) al día.",
    "Tengo buena salud (es decir, vista, oído, dentadura, en buenas condiciones).",
    "Soy capaz de hablar abiertamente sobre mis sentimientos cuando me siento irritado o preocupado.",
    "En 50 millas a la redonda (aproximadamente dos kilómetros) poseo, al menos, un familiar en el que puedo confiar.",
    "Converso regularmente sobre problemas domésticos (es decir sobre tareas del hogar, dinero, problemas de la vida cotidiana) con las personas que conviven conmigo.",
  ];

  respuestas: string[] = new Array(this.afirmaciones.length).fill('0');

  checkData() {
    let haveZero = this.respuestas.includes('0')

    if (!haveZero)
      this.calcularPuntuacion()
    else
      alert('seleccione todo')
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