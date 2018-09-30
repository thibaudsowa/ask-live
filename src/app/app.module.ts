import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AskLiveModule } from 'ask-live';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AskLiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
