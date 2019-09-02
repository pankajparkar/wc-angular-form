import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgformComponent } from './ngform/ngform.component';
import { PolymerComponent } from './polymer/polymer.component';
import { WebcomponentComponent } from './webcomponent/webcomponent.component';
import { StencilComponent } from './stencil/stencil.component';

const routes: Routes = [
  {path: 'ngform', component: NgformComponent},
  {path: 'polymer', component: PolymerComponent},
  {path: 'webcomponent', component: WebcomponentComponent},
  {path: 'stencil', component: StencilComponent},
  {path: '', redirectTo: 'ngform', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ]
})
export class AppRoutingModule { }
