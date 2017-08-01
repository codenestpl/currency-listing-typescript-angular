import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
 
import { AppComponent }  from './app.component';
import { CurrencyDetailComponent }  from './currency-detail.component';
import { CurrencyService } from './currency.service';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule 
  ],
  declarations: [
    AppComponent, 
    CurrencyDetailComponent
  ],
  providers: [ CurrencyService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }