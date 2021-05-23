import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.scss'],
})
export class UrlFormComponent implements OnInit {
  url = '';

  @Output() loading = new EventEmitter<boolean>();
  @Output() results = new EventEmitter();

  constructor(private ps: PageService) {}

  ngOnInit(): void {}

  scrape() {
    this.loading.emit(true);
    this.ps.get(this.url).subscribe((resp) => {
      this.results.emit(resp);
      this.loading.emit(false);
    });
  }
}
