import { Component } from '@angular/core';
import { ReplacementRatesByAcademyComponent } from './components/replacement-rates-by-academy/replacement-rates-by-academy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReplacementRatesByAcademyComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'replacement-poc';
}
