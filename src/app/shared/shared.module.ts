import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollspyDirective } from './scrollspy.directive';
import { CountToModule } from 'angular-count-to';
import { NgbAccordionModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    ScrollspyDirective,
    ServicesComponent,
    PortfolioComponent,
    PricingComponent,
    ContactComponent,
    FooterComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ScrollToModule.forRoot(),
    FeatherModule.pick(allIcons),
    CountToModule,
    NgbAccordionModule,
    NgbRatingModule,
    FormsModule
  ],
  exports: [ServicesComponent, FeaturesComponent, PortfolioComponent, PricingComponent, ContactComponent, FooterComponent, FeatherModule, ScrollspyDirective]
})
export class SharedModule { }
