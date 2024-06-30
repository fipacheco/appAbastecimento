import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class HomePage {
  precoEtanol: number = 0;
  precoGasolina: number = 0;
  resultado: string = '';
  precoIdeal: number = 0;
  combustivelNaoVantajoso: string = '';

  constructor() {}

  calcular() {
    console.log(this.precoEtanol, this.precoGasolina)
    if (this.precoEtanol && this.precoGasolina) {
      const ratio = this.precoEtanol / this.precoGasolina;
      if (ratio > 0.7) {
        this.resultado = 'Gasolina';
        this.precoIdeal = this.precoGasolina * 0.7;
        this.combustivelNaoVantajoso = 'etanol'
      } else {
        this.resultado = 'Etanol';
        this.precoIdeal = this.precoEtanol / 0.7;
        this.combustivelNaoVantajoso = 'gasolina'
      }
    }
  }
}
