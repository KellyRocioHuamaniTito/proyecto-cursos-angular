import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock';
import { CommonModule } from '@angular/common'; // importar CommonModule NgIf
import { Alumno } from '../../models/alumno.to';


@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent implements OnInit {

  public alumnos?: Alumno[]
  //Cuando inicia se ejecuta 
  ngOnInit(): void {
      this.alumnos=alumnos
  }

}
