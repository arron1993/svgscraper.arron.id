import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-scraper-page',
  templateUrl: './scraper-page.component.html',
  styleUrls: ['./scraper-page.component.scss'],
})
export class ScraperPageComponent implements OnInit {
  url = '';
  loading = false;
  results = null;

  constructor(private ps: PageService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getSVG(svg) {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  download(svg) {
    const blob = new Blob([svg], { type: 'application/octet-stream' });

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      window.URL.createObjectURL(blob)
    );
  }

  invert(row) {
    if (row.classList.contains('bg-dark-grey')) {
      row.classList.remove('bg-dark-grey');
    } else {
      row.classList.add('bg-dark-grey');
    }
  }
}
