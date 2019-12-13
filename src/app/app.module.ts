//modules
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule}                 from '@angular/forms'; // para disponer de two-way data binding
import { NgModule }                   from '@angular/core';

//components
import { AppComponent }               from './app.component';
import { Componente1Component }       from './components/componente1/componente1.component';
import { Component2Component } from './components/component2/component2.component';

@NgModule({
  declarations: [AppComponent, Componente1Component, Component2Component],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
