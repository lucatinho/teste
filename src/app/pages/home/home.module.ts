import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCardModule
  ]
})
export class HomeModule {
}
