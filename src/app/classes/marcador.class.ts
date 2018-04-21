export class Marcador {
    
    public lat: number;
    public lng: number;
    public titulo: string = 'Sin Titulo';
    public desc: string = 'Sin Descipcion';

    public constructor (lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }

}
