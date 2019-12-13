import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'c1',
    templateUrl: './componente1.component.html',
    styleUrls: ['./componente1.component.css']

})

export class Componente1Component implements OnInit{
    
    nombre: string = undefined;
    nombres: string[] = ["Honorio","Carlota", "Dio"];
    edad: number = 20;
    activo: boolean = false;
    selectedFamilia: string = "HARDWARE";
    familias: string[] = ["SOFTWARE", "HARDWARE", "CONSUMIBLES"];
    sistemaNotificacion: string = "email";
    fechaNacimiento: Date = new Date(1990,10,3);
    numeroCaracteres: number = undefined;

    ngOnInit(): void {
        
        this.nombre = "Pepín";
        this.numeroCaracteres = this.nombre.length;
    }

    refresh(){
    
        this.numeroCaracteres = this.nombre.length;
        
    }

    test(): void {

        this.nombres.push("za warudo");
    }
}