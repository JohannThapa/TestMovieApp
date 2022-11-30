import { TopratedComponent } from './toprated.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =  [
  {path: '',
    children: [
      { path: '', component: TopratedComponent},
    ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopratedRoutingModule { }
