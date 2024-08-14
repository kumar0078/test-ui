import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BackendServiceService } from './backend-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [BackendServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
