import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BoxComponent } from './box/box.component';
import { BarraComponent } from './barra/barra.component';
import { BodyComponent } from './body/body.component';
import { TablitaComponent } from './tablita/tablita.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { LinkeoComponent } from './linkeo/linkeo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule, MatCheckboxModule} from '@angular/material';
import { TodalainfoComponent } from './todalainfo/todalainfo.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BoxComponent,
    BarraComponent,
    BodyComponent,
    TablitaComponent,
    LinkeoComponent,
    TodalainfoComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
