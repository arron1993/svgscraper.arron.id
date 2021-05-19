import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScraperRoutingModule } from './scraper-routing.module';
import { ScraperPageComponent } from './pages/scraper-page/scraper-page.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [ScraperPageComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    ScraperRoutingModule,
    FormsModule
  ]
})
export class ScraperModule { }
