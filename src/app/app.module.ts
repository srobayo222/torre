import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchComponent } from './componentes/search/search.component';
import { FormsModule } from '@angular/forms'

import { ApiService } from './service/api.service';
import { DataComponent } from './componentes/data/data.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
