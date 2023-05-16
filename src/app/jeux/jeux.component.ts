import { Component, OnInit } from '@angular/core';
import { Jeu } from '../model/jeu.model';
import { JeuService } from '../services/jeu.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
})
export class JeuxComponent implements OnInit {

  jeux? : Jeu[];

  constructor(private jeuService : JeuService,public authService: AuthService) {
  //this.jeux=[]
   }

  ngOnInit(): void {
    this.chargerJeux();

  }
  chargerJeux(){
    this.jeuService.listeJeux().subscribe(prods => {
    console.log(prods);
    this.jeux = prods;
    });
    }
  supprimerJeu(p: Jeu){
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.jeuService.supprimerJeu(p.idJeu).subscribe(() => {
console.log("jeu supprimé");
this.chargerJeux();
});
}

}
