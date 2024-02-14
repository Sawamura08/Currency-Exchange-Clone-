// app.component.ts
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currencies: any;

  constructor(
    private currencyService: CurrencyService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.currencyService.getCurrencies().subscribe((data) => {
      this.currencies = data;
      console.log(this.currencies);
    });
  }

  /* mouse enter on tools */

  toolsHover() {
    const tools = this.el.nativeElement.querySelector('.toolsContainer');
    this.renderer.setStyle(tools, 'display', 'grid');
  }

  toolsHoverOut() {
    const tools = this.el.nativeElement.querySelector('.toolsContainer');
    this.renderer.setStyle(tools, 'display', 'none');
  }

  /* mouse hover on resources */
  resourceHover() {
    const resources = this.el.nativeElement.querySelector(
      '.resourcesContainer'
    );
    this.renderer.setStyle(resources, 'display', 'flex');
  }

  resourceHoverOut() {
    const resources = this.el.nativeElement.querySelector(
      '.resourcesContainer'
    );
    this.renderer.setStyle(resources, 'display', 'none');
  }
}
