import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { AboutComponent } from './about/about.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import { routing } from './routing/routing.component';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    AboutComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
