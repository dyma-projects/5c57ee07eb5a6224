import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteurInput;
  @Output() compt = new EventEmitter()
  compteur: number = 0

  constructor() { }

  ngOnInit() {
  }

  incremental(){
    this.compt.emit(++this.compteur)
  }

  decremental(){
    this.compt.emit(--this.compteur)
  }

}
