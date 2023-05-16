import { Entreprise } from "./entreprise.model";

export class Jeu {
    idJeu! : number;
    titre! : string;
    taille! : number;
    niveauDifficulte! : string;
    dateCreation! : Date ;
    entreprise! : Entreprise;
    }