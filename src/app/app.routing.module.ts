import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRoutes } from './views/views.routing.module';

export const routes: Routes = [
  ...ViewRoutes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }