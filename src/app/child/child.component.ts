import { Component, EventEmitter, Output,Input } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() timer: string = '';

  @Output() timerStopped = new EventEmitter<number>();

  seconds: number = 0;
  intervalId: any;

  buttonStart = 'Start';
  buttonStop = 'Stop';
start() {
  this.intervalId = setInterval(() => {
    this.seconds++;
  }, 1000);
}

stop() {
  clearInterval(this.intervalId);
  this.timerStopped.emit(this.seconds);
}
}
