import { Component, Input } from '@angular/core';

import { Currency } from './currency';

@Component({
  selector: 'currency-detail',
  template: '<li><span class="badge">{{currency.id}}</span>{{currency.name}} - {{currency.value}}</li>'
})

export class CurrencyDetailComponent {
	@Input() currency: Currency;
}