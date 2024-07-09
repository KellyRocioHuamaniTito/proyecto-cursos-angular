import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';
import { CommonModule } from '@angular/common'; // importar CommonModule NgIf
import { Curso } from '../../models/curso.to';


@Component({
  selector: 'app-tabla-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css'
})
export class TablaCursosComponent implements OnInit {

  public cursos?: Curso[]
  //Cuando inicia se ejecuta 
  ngOnInit(): void {
      this.cursos=cursos
  }

}
