import { Component, OnInit } from '@angular/core';

import { Currency } from './currency';
import { CurrencyService } from './currency.service';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'List of currencies';  
  currencies : Currency[];
  selectedCurrency: Currency;

  constructor(
  private currencyService: CurrencyService) { }

  getCurrencies(): void {
    this.currencyService
        .getCurrencies()
        .then(currencies => this.currencies = currencies);
  }

  ngOnInit(): void {
    this.getCurrencies();
  }

  onSelect(currency: Currency): void { 
    this.selectedCurrency = currency;
  }

}

