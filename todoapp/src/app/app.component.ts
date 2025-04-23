import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  welcome = 'Texto desde -app.component.ts';
  tasks = [ "Instalar Angular/CLI", "Crear Una Aplicacion", "Crear Componentes"]
}

