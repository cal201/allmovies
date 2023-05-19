import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import {HomeContentComponent} from "../home-content/home-content.component";


@NgModule({
  declarations: [
    MoviesComponent,

  ],
  imports: [
    CommonModule,
    MoviesRoutingModule

  ],
  providers: [
    HomeContentComponent
  ]

})
export class MoviesModule { }
