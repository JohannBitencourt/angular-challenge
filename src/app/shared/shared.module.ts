import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HighchartsChartModule } from 'highcharts-angular';
import { HeaderSkeleton } from './skeleton/header/header.skeleton';
import { FooterSkeleton } from './skeleton/footer/footer.skeleton';
import { SidebarSkeleton } from './skeleton/sidebar/sidebar.skeleton';
import { AreaWidget } from './widgets/area/area.widget';
import { CardWidget } from './widgets/card/card.widget';
import { PieWidget } from './widgets/pie/pie.widget';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    HeaderSkeleton,
    FooterSkeleton,
    SidebarSkeleton,
    AreaWidget,
    CardWidget,
    PieWidget
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderSkeleton,
    FooterSkeleton,
    SidebarSkeleton,
    AreaWidget,
    CardWidget,
    PieWidget
  ]
})
export class SharedModule { }
