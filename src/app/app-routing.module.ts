import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgformComponent } from './ngform/ngform.component';

const routes: Routes = [
  {path: 'ngform', component: NgformComponent},
  {path: 'polymer', component: NgformComponent},
  {path: 'webcomponent', component: NgformComponent},
  {path: '**', redirectTo: 'ngform'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ]
})
export class AppRoutingModule { }
