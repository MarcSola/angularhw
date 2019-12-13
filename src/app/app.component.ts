import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
    let count = 0;

    setInterval(() => {
      if(count < 10){

        this.nombre += "*";
        console.log(count);
        count++;

      } else{

        this.nombre = this.nombre.slice()


      }
      
    },1000);

  }
  nombre = "Pepín";
}
