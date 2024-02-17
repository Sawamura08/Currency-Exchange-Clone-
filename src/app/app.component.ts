// app.component.ts
import { Component, OnInit, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { CurrencyService } from "./services/countries-currency.service";
import { transformMenuAnimation } from "./animation";
import { CountriesCurrencyService } from "./services/countries-currency.service";
import { ConvertCurrencyService } from "./services/convert-currency.service";
import { forkJoin, from } from "rxjs";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	animations: [transformMenuAnimation],
})
export class AppComponent implements OnInit {
	currencies: any;
	fromCountryCurrencies: any;
	toCountryCurrencies: any;

	constructor(
		private currencyService: CurrencyService,
		private renderer: Renderer2,
		private el: ElementRef,
		private countryCurrency: CountriesCurrencyService,
		public convert: ConvertCurrencyService
	) {}

	ngOnInit() {
		this.currencyService.getCurrencies().subscribe((data) => {
			this.currencies = data;
			console.log(this.currencies);
		});
	}

	inputAmount: any;
	fromCountry: string = "";
	toCountry: string = "";
	isConverted: boolean = false;

	convertCurrency() {
		this.countryCurrency.sendData(this.fromCountry, this.toCountry);

		const fromCountryData$ = this.countryCurrency.getCountryCurrency();
		const toCountryData$ = this.countryCurrency.getToCountryCurrency();

		forkJoin([fromCountryData$, toCountryData$]).subscribe(([fromData, toData]) => {
			this.fromCountryCurrencies = this.convert.conversion(fromData, this.fromCountry, this.toCountry);
			this.toCountryCurrencies = this.convert.getValueOftheFromCountry(
				toData,
				this.fromCountry,
				this.toCountry
			);

			this.convert.ConvertNow(this.inputAmount);
			this.isConverted = true;
		});
	}
}
