import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleTinyComponent } from './simple-tiny-component/simple-tiny-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTinyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
