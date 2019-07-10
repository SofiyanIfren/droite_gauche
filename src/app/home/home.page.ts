import { Component, OnInit } from '@angular/core';
import { Timer } from './Timer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  big_arrow: any;
  score: any;
  timer: Timer = new Timer();

  constructor() {}

  // fonction de génération de nombre aléatoire entre 2 nombres
  getRandomInt(max) {
    return Math.floor(Math.random()*Math.floor(max));
  }

  ngOnInit(){
    this.timer.start();
    this.big_arrow = this.getRandomInt(4);
    this.score = 0;
    console.log(this.big_arrow);
  }

  // Réinitialisation de la grande flèche
  reInit(){
    let new_arrow = this.getRandomInt(4);
    if (new_arrow !== this.big_arrow){
      this.big_arrow = new_arrow;
    } else {
      this.reInit(); // Pour etre surs que la fleche change de direction => UX
    }
  }

  // Fonctions de gestion de l'event onClick()
  rightClick(){
    if (this.big_arrow === 0){
      this.score += 1;
    }
    this.reInit();
  }
  downClick(){
    if (this.big_arrow === 1){
      this.score += 1;
    }
    this.reInit();
  }
  leftClick(){
    if (this.big_arrow === 2){
      this.score += 1;
    }
    this.reInit();
  }
  upClick(){
    if (this.big_arrow === 3){
      this.score += 1;
    }
    this.reInit();
  }
}
