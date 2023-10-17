import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ParentComponent } from './parent/parent.component';
import { GridComponent } from './grid/grid.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { BasicformComponent } from './basicform/basicform.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  { path: 'home', component: HomeComponent }, 
  { path: 'table-api', component: TableComponent }, 
  { path: 'p-c', component: ParentComponent }, 
  { path: 'grid', component: GridComponent }, 
  { path: 'i-p', component: InputComponent }, 
  { path: 'o-p', component: OutputComponent }, 
  { path: 'form', component: BasicformComponent }, 
  { path: 'component1', component: Component1Component }, 
  { path: 'component2', component: Component2Component }, 
  { path: 'component3', component: Component3Component,canActivate:['Authguard'] }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
