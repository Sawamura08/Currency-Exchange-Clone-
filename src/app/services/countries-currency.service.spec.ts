import { TestBed } from "@angular/core/testing";

import { CountriesCurrencyService } from "./countries-currency.service";

describe("CountriesCurrencyService", () => {
	let service: CountriesCurrencyService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CountriesCurrencyService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
