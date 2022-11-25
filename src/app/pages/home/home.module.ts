import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        MatTableModule,
        MatSortModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class HomeModule {
}
