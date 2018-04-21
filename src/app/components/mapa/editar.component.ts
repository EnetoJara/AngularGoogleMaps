import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
	selector: 'app-editar',
	templateUrl: './editar.component.html',
	styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

	public forma: FormGroup;
	constructor( public fb: FormBuilder,
		public dialogRef: MatDialogRef<EditarComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) {
			console.log(data)
			this.forma = fb.group({
				'titulo': data.titulo,
				'desc': data.descripcion
			});
		}

	ngOnInit() {
	}

	public guardarCambios () {
		this.dialogRef.close(this.forma.value);
	}

	public onNoClick(): void {
		this.dialogRef.close();
	}

}
