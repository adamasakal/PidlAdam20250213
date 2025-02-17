import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {
  @Input() a: number = 0;
  @Input() b: number = 0;
  @Output() resultEvent = new EventEmitter<number>();

  calculate(operation : string){
    if (operation==="add"){
      this.resultEvent.emit(this.a + this.b);
    } else if (operation==="subtract"){
      this.resultEvent.emit (this.a - this.b);
  }
}
}
