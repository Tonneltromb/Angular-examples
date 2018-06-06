import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PrimeNgImports} from './system/common/primeNg-imports';
import {HeaderComponent} from './system/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './system/content/home-page.component';
import {HttpModule} from '@angular/http';
import {ForumPageComponent} from './system/content/forum-page/forum-page.component';
import {FormsPageComponent} from './system/content/forms-page/forms-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsPageModule} from './system/content/forms-page/forms-page.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ForumPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    PrimeNgImports,
    AppRoutingModule,
    FormsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
