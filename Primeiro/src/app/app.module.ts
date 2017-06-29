import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { EventBindComponentComponent } from './event-bind-component/event-bind-component.component';
import { PaiComponentComponent } from './pai-component/pai-component.component';
import { FilhoComponentComponent } from './filho-component/filho-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindComponentComponent,
    PaiComponentComponent,
    FilhoComponentComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
