import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JeuService } from '../services/jeu.service';
import { Jeu } from '../model/jeu.model';
import { Entreprise } from '../model/entreprise.model';

@Component({
  selector: 'app-update-jeu',
  templateUrl: './update-jeu.component.html',
})
export class UpdateJeuComponent implements OnInit {
  currentJeu = new Jeu();
  entreprises! : Entreprise[];
  updatedEntId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private jeuService: JeuService) { }

  ngOnInit(): void {
    this.jeuService.listeEntreprises().
subscribe(cats => {this.entreprises = cats._embedded.entreprises;
console.log(cats);
});
this.jeuService.consulterJeu(this.activatedRoute.snapshot.params['id']).
subscribe( prod =>{ this.currentJeu = prod;
this.updatedEntId =this.currentJeu.entreprise.idEnt;
} ) ;

  }
  updateJeu()
{ this.currentJeu.entreprise = this.entreprises.find(cat => cat.idEnt == this.updatedEntId)!;
  this.jeuService.updateJeu(this.currentJeu).subscribe(prod => {
  this.router.navigate(['jeux']); }
  );

}

}
