import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAlumnosComponent } from "./components/tabla-alumnos/tabla-alumnos.component";//importamos los componentes
import { TablaCursosComponent } from "./components/tabla-cursos/tabla-cursos.component";//importamos los componentes
import { CommonModule } from '@angular/common'; // importar CommonModule NgIf


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TablaAlumnosComponent, TablaCursosComponent,CommonModule]
})
export class AppComponent {

  cursos:boolean=true
  //metodo de clase
  handleCambio(){
    this.cursos=!this.cursos

  }
}
