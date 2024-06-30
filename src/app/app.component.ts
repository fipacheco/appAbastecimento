import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  template: '<app-home></app-home>',
  standalone: true,
  imports: [IonicModule, HomePage]
})
export class AppComponent {}
