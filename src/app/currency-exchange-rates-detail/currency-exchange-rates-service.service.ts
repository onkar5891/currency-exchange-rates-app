import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeRatesService {

  constructor(private http: HttpClient) { }

  fetchRates() {
    return this.http.get(RATES_API)
  }
}

const RATES_API = "http://localhost:4201/rates"
