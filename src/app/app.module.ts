import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './route/app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './component/top-nav/top-nav.component';
import { BoxComponent } from './component/box/box.component';
import { BarraComponent } from './component/barra/barra.component';
import { BodyComponent } from './component/body/body.component';
import { TablitaComponent } from './component/tablita/tablita.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { LinkeoComponent } from './component/linkeo/linkeo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule, MatCheckboxModule} from '@angular/material';
import { TodalainfoComponent } from './component/todalainfo/todalainfo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng/components/common/messageservice';
import {ButtonModule} from 'primeng/button';

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
    
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    PanelModule,
    TabViewModule,
    SelectButtonModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    ButtonModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
