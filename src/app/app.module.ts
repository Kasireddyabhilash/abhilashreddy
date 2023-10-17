import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GridComponent } from './grid/grid.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { BasicformComponent } from './basicform/basicform.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { authGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TableComponent,
    ParentComponent,
    ChildComponent,
    GridComponent,
    InputComponent,
    OutputComponent,
    BasicformComponent,
    Component1Component,
    Component2Component,
    Component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
