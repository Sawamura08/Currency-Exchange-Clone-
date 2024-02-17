import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class CountriesCurrencyService {
	constructor(private http: HttpClient) {}

	private fromCountrylink: string =
		"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/.json";

	private toCountrylink: string =
		"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/.json";

	sendData(sentFromCountryData: any, sentToCountryData: any): void {
		this.fromCountrylink = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${sentFromCountryData}.json`;
		this.toCountrylink = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${sentToCountryData}.json`;
	}

	getCountryCurrency(): Observable<any> {
		return this.http.get<any>(this.fromCountrylink);
	}

	getToCountryCurrency(): Observable<any> {
		return this.http.get<any>(this.toCountrylink);
	}
}

@Injectable({
	providedIn: "root",
})
export class CurrencyService {
	private apiUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

	constructor(private http: HttpClient) {}

	getCurrencies(): Observable<any> {
		return this.http.get<any>(this.apiUrl);
	}
}
