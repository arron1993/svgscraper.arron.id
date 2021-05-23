import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ScraperPageComponent } from './pages/scraper-page/scraper-page.component';

const routes: Routes = [
  {
    path: '',
    component: ScraperPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScraperRoutingModule {}
