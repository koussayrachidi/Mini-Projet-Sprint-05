import { Component, OnInit } from '@angular/core';
import { Jeu } from '../model/jeu.model';
import { JeuService } from '../services/jeu.service';
import { Entreprise } from '../model/entreprise.model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-jeu',
  templateUrl: './add-jeu.component.html',
})
export class AddJeuComponent implements OnInit {
  newJeu = new Jeu();
  message?:string;
  entreprises! : Entreprise[];
  newIdEnt!: number;
  newEntreprise!: Entreprise;
  constructor(private jeuService : JeuService,    private router :Router,
    ) { }

  ngOnInit(): void {
    this.jeuService.listeEntreprises().
subscribe(ents => {this.entreprises = ents._embedded.entreprises;
console.log(ents);
});
  }

  addJeu(){
    this.newJeu.entreprise = this.entreprises.find(ent => ent.idEnt == this.newIdEnt)!;
    this.jeuService.ajouterJeu(this.newJeu)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['jeux']);
    });
    
    }
    

}
