import { Component } from '@angular/core';
import { ReplacementRatesApiService } from '../../services/replacement-rates-api.service';
import { ReplacementRatesResults } from '../../models/replacement-rates-results.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-replacement-rates-by-academy',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './replacement-rates-by-academy.component.html'
})
export class ReplacementRatesByAcademyComponent {
  ratesData: ReplacementRatesResults[] = [];
  totalCount: number = 0;

  constructor(private replacementRatesService: ReplacementRatesApiService) {
    this.replacementRatesService = replacementRatesService;
    this.loadData();
  }
  
  loadData(): void {
    this.replacementRatesService.getReplacementRatesData().subscribe({
      next: (response) => {
        this.ratesData = response.results;
        this.totalCount = response.total_count;
      },
      error: (err) => {
        console.error(`Erreur API: {err}`);
      }
    });
  }

}
