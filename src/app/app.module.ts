import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MatMenuModule,
		MatButtonModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
