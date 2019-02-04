import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavModule } from './nav/nav.module';


import { registerLocaleData } from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFR from '@angular/common/locales/fr';
import localeIT from '@angular/common/locales/it';


registerLocaleData(localeDECH);
registerLocaleData(localeFR);
registerLocaleData(localeIT);


import { TranslateSelectorPipe } from './pipes/TranslteSelectorPipe';


export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    TranslateSelectorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NavModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
