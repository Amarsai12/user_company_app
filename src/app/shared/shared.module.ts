import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    NgxChartsModule
  ],
  exports: [
    MatCardModule,
    NgxChartsModule
  ]
})
export class SharedModule { }
