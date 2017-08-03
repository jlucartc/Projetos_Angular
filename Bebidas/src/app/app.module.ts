import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { DbService } from './services/db.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ViewsModule,HttpModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})



export class AppModule { }
