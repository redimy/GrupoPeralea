import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { LayoutOne4Component } from './layout-one4/layout-one4.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutOne4Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ScrollToModule.forRoot(),
    CarouselModule,
    NgbAccordionModule,
    NgxYoutubePlayerModule,
    FormsModule
  ]
})
export class PagesModule { }
