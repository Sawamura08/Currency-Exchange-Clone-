import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ConvertCurrencyService {
	constructor() {}

	private valudeOfSelectedFromCountry: any;
	private valudeOfSelectedToCountry: any;
	private convertedValue: any;

	conversion(currencyList: any, fromCountry: string, toCountry: string) {
		const countryCurrency = currencyList[fromCountry];

		for (let key of Object.keys(countryCurrency)) {
			const valueOfFromCountry = countryCurrency[toCountry];
			this.valudeOfSelectedFromCountry = valueOfFromCountry;
		}
	}

	getValueOftheFromCountry(currencyList: any, fromCountry: string, toCountry: string) {
		const countryCurrency: any = currencyList[toCountry];

		for (let key of Object.keys(countryCurrency)) {
			const valueOfToCountry = countryCurrency[fromCountry];
			this.valudeOfSelectedToCountry = valueOfToCountry;
		}
	}

	ConvertNow(inputAmount: number) {
		this.convertedValue = inputAmount * this.valudeOfSelectedFromCountry;
		this.convertedValue = parseFloat(this.convertedValue.toFixed(4));
	}

	getConvertedValue(): any {
		return this.convertedValue;
	}

	getValueFromCountry(): any {
		return this.valudeOfSelectedFromCountry;
	}

	getValueToCountry(): any {
		return this.valudeOfSelectedToCountry;
	}
}
