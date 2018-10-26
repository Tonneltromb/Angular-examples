import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PrimeNgImports} from './system/common/primeNg-imports';
import {HeaderComponent} from './system/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './system/content/home-page.component';
import {ForumPageComponent} from './system/content/forum-page/forum-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsPageModule} from './system/content/forms-page/forms-page.module';
import {DirectivesModule} from './system/common/directive/directives.module';
import {HttpClientModule} from '@angular/common/http';


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
    HttpClientModule,
    PrimeNgImports,
    AppRoutingModule,
    FormsPageModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
