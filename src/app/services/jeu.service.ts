import { Injectable } from '@angular/core';
import { Jeu } from '../model/jeu.model';
import { Entreprise } from '../model/entreprise.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { EntrepriseWrapper } from '../model/entrepriseWrapped.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class JeuService {
  apiURLEnt: string = 'http://localhost:8080/jeux/ent';


  jeux! : Jeu[];
  jeu !: Jeu;
  entreprises! : Entreprise[];
  constructor(private http : HttpClient) {/*
    this.entreprises= [
      {idEnt : 1, nomEnt : "riot games",nombreEmployes:50},
       {idEnt: 2, nomEnt : "valve",nombreEmployes:10}
    ];
    this.jeux = [
      {idJeu : 1, titre : "lol", taille : 50.2,niveauDifficulte: "easy", dateCreation : new Date("01/14/2011"),entreprise:{idEnt : 1, nomEnt : "riot games",nombreEmployes:50}},
      {idJeu : 2, titre : "cs", taille : 50,niveauDifficulte: "easy", dateCreation : new Date("12/17/2010"),entreprise:{idEnt: 2, nomEnt : "valve",nombreEmployes:10}},
      {idJeu : 3, titre :"valo", taille : 40,niveauDifficulte: "easy", dateCreation : new Date("02/20/2020"),entreprise:{idEnt : 1, nomEnt : "riot games",nombreEmployes:50}}
       ];*/
   }

  listeJeux(): Observable<Jeu[]>{
    return this.http.get<Jeu[]>(apiURL);
    }
    ajouterJeu( prod: Jeu):Observable<Jeu>{
      return this.http.post<Jeu>(apiURL, prod, httpOptions);
      }

      supprimerJeu(id : number) {
        const url = `${apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }
        
        consulterJeu(id: number): Observable<Jeu> {
          const url = `${apiURL}/${id}`;
          return this.http.get<Jeu>(url);
          }
          

        updateJeu(prod:Jeu): Observable<Jeu>
{
  return this.http.put<Jeu>(apiURL, prod, httpOptions);
}


trierJeux(){
  this.jeux = this.jeux.sort((n1,n2) => {
  if (n1.idJeu! > n2.idJeu!) {
  return 1;
  }
  if (n1.idJeu! < n2.idJeu!) {
  return -1;
  }
  return 0;
  });
  }
  
  
   
      listeEntreprises():Observable<EntrepriseWrapper>{
        return this.http.get<EntrepriseWrapper>(this.apiURLEnt);
        }
        
      
    consulterEntreprise(id:number): Entreprise{
    return this.entreprises.find(cat => cat.idEnt == id)!;
    }

    rechercherParEntreprise(idEnt: number):Observable< Jeu[]> {
      const url = `${apiURL}/jeuxent/${idEnt}`;
      return this.http.get<Jeu[]>(url);
      }
      rechercherParNom(titre: string):Observable< Jeu[]> {
        const url = `${apiURL}/jeuxByName/${titre}`;
        return this.http.get<Jeu[]>(url);
        }

        ajouterEntreprise( ent: Entreprise):Observable<Entreprise>{
          return this.http.post<Entreprise>(this.apiURLEnt, ent, httpOptions);
          }
}
