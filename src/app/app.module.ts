import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { GifsCardsComponent } from './gifs/component/gifs-card/gifs-cards.component';



@NgModule({
  declarations: [
    AppComponent,
    GifsCardsComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
