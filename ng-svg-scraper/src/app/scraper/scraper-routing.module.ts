import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScraperPageComponent } from './pages/scraper-page/scraper-page.component';

const routes: Routes = [{
  path: '',
  component: ScraperPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScraperRoutingModule { }
