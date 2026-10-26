import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyComp } from './mycomp.component';
import { Mail } from './../mail.component';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MyComp, Mail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');

  id=" "
checked=false

}
