import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeuxComponent } from './jeux/jeux.component';
import { AddJeuComponent } from './add-jeu/add-jeu.component';
import { UpdateJeuComponent } from './update-jeu/update-jeu.component';
import { RechercheParEntrepriseComponent } from './recherche-par-entreprise/recherche-par-entreprise.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeEntreprisesComponent } from './liste-entreprises/liste-entreprises.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { JeuGuard } from './jeu.guard';

const routes: Routes = [
  {path: "jeux", component : JeuxComponent},
  {path: "add-jeu", component : AddJeuComponent,  canActivate:[JeuGuard]},
  { path: "", redirectTo: "jeux", pathMatch: "full" },
  {path: "updateJeu/:id", component: UpdateJeuComponent},
  {path: "rechercheParEntreprise", component : RechercheParEntrepriseComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeEntreprises", component : ListeEntreprisesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
