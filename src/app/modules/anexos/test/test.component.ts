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

  

  calcularPuntuacion() {
    
    
    let nivelVulnerabilidad = '';
    /* if (puntuacionTotal < 30) {
        nivelVulnerabilidad = 'No vulnerable';
    } else if (puntuacionTotal >= 30 && puntuacionTotal <= 49) {
        nivelVulnerabilidad = 'Vulnerable';
    } else if (puntuacionTotal >= 50 && puntuacionTotal <= 75) {
        nivelVulnerabilidad = 'Seriamente vulnerable';
    } else {
        nivelVulnerabilidad = 'Extremadamente vulnerable';
    }
    console.log('Puntuación total:', puntuacionTotal); */
    console.log('Nivel de vulnerabilidad:', nivelVulnerabilidad);
  }
}

