import { ReplacementRatesResults } from './replacement-rates-results.model';

export interface ReplacementApiResponse {
  total_count: number;
  results: ReplacementRatesResults[];
}
