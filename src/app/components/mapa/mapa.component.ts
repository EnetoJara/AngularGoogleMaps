import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditarComponent } from './editar.component';

@Component({
	selector: 'app-mapa',
	templateUrl: './mapa.component.html',
	styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

	public title: string = 'Angular Maps Hello World!';
	public lat: number = 51.678418;
	public lng: number = 7.809007;
	public marcadores: Marcador[] = [];

	public constructor (public snackBar: MatSnackBar, public dialog: MatDialog) {
		(localStorage.getItem('marcadores')) ?
			this.marcadores = JSON.parse(localStorage.getItem('marcadores')) :
			this.marcadores.push(new Marcador(51.678418, 7.809007));
	}

	public ngOnInit () { }

	public agregarMarcador (evt) {
		this.marcadores.push(new Marcador(evt.coords.lat, evt.coords.lng))
		this.guardarStorage();
		this.snackBar.open('Marcador Agregado', 'Cerrar', { duration: 2000 });
	}

	public guardarStorage (): void {
		localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
	}

	public borrarMarcador (index: number): void {
		this.marcadores.splice(index, 1);
		this.guardarStorage();
		this.snackBar.open('Marcador Agregado', 'Cerrar', { duration: 2000 });
	}

	public editarMarcador (marcador: Marcador) {
		const dialogRef = this.dialog.open(EditarComponent, {
			width: '250px',
			data: { titulo: marcador.titulo, descripcion: marcador.desc }
		});

		dialogRef.afterClosed().subscribe(result => {
			if (!result) return;
			marcador.titulo = result.titulo;
			marcador.desc = result.desc;
			this.guardarStorage();
			this.snackBar.open('Marcador Actualizado', 'Cerrar', { duration: 2000 });
		});

	}
}
