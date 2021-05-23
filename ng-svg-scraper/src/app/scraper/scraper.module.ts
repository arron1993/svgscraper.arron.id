import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScraperRoutingModule } from './scraper-routing.module';
import { ScraperPageComponent } from './pages/scraper-page/scraper-page.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { UrlFormComponent } from './components/url-form/url-form.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';


@NgModule({
  declarations: [ScraperPageComponent, LoadingSpinnerComponent, UrlFormComponent, AboutPageComponent],
  imports: [
    CommonModule,
    ScraperRoutingModule,
    FormsModule
  ]
})
export class ScraperModule { }
