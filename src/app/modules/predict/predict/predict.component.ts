import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})

export class PredictComponent {
  result:boolean=false
  formulario: FormGroup;
  valor:number=0
  
  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      paridad: 0,
      nivel_escolaridad: 0,
      higiene_bucal: 0,
      adiccion_tabaquica: 0,
      estres_psicologico: 0,
      diabetes_mellitus: 0,
      obesidad: 0
    });
  }

  enviarDatos() {
    const { 
      paridad,
      nivel_escolaridad,
      higiene_bucal,
      adiccion_tabaquica,
      estres_psicologico,
      diabetes_mellitus,
      obesidad } = this.formulario.value

    this.valor = this.probabilidad(
      paridad,
      nivel_escolaridad,
      higiene_bucal,
      adiccion_tabaquica,
      estres_psicologico,
      diabetes_mellitus,
      obesidad)
      this.formulario.disabled
      this.result=true
  }
  probabilidad(
    Pa: number,
    NE: number,
    HB: number,
    AT: number,
    EP: number,
    DM: number,
    O: number): number {
    let probabilidad: number
    probabilidad = 1 / (1 + Math.exp(6.030
      - 0.767 * Pa
      - 2.660 * NE
      - 0.985 * HB
      - 2.712 * AT
      - 1.958 * EP
      - 1.612 * DM
      - 2.173 * O)
    )
    probabilidad = parseFloat(probabilidad.toFixed(4))
    return probabilidad
  }
  restoreData(){
    this.valor=0
    this.result=false
    this.formulario.reset
    this.formulario.enable
  }
}
