import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Directive, forwardRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AppComponent } from './app.component';
import { WcAdapterDirective } from './wc-adapter.directive';
import { OrigamiModule } from '@codebakery/origami';
import { AppRoutingModule } from './app-routing.module';
import { NgformComponent } from './ngform/ngform.component';
import { PolymerComponent } from './polymer/polymer.component';
import { WebcomponentComponent } from './webcomponent/webcomponent.component';
import { StencilComponent } from './stencil/stencil.component';


@NgModule({
  declarations: [
    AppComponent,
    WcAdapterDirective,
    NgformComponent,
    PolymerComponent,
    WebcomponentComponent,
    StencilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OrigamiModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
