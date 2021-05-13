import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScraperPageComponent } from './scraper-page.component';

describe('ScraperPageComponent', () => {
  let component: ScraperPageComponent;
  let fixture: ComponentFixture<ScraperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScraperPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
