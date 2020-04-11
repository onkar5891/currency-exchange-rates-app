import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { CurrencyExchangeRatesService } from './currency-exchange-rates-service.service';
import { CurrencyExchangeRates } from './currency-exchange-rates';

@Component({
  selector: 'app-currency-exchange-rates-detail',
  templateUrl: './currency-exchange-rates-detail.component.html',
  providers: [CurrencyExchangeRatesService]
})
export class CurrencyExchangeRatesDetailComponent implements OnInit {
  erroneousResponse = false
  rates: CurrencyExchangeRates = null

  constructor(private authService: AuthService, private router: Router, private service: CurrencyExchangeRatesService) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate([''])
    }
    this.showRates()
  }

  showRates() {
    this.service.fetchRates().subscribe(
      (data: CurrencyExchangeRates) => {
        this.rates = data
        this.erroneousResponse = false
      },
      _error => this.handleError()
    )
  }
  handleError() {
    this.erroneousResponse = true
  }

  emptyRates() {
    return this.rates?.rates?.values.length == 0
  }
}
