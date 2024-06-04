import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FeaturesModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
