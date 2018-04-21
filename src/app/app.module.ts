import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { EditarComponent } from './components/mapa/editar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	entryComponents: [
		EditarComponent
	],
	declarations: [
		AppComponent,
		MapaComponent,
		EditarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDPTle0KhNcopqQ9LX5wtFDhp8CwX7mioM'
		}),
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
