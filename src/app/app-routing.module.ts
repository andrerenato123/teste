import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudanteDetailComponent } from './estudante-detail/estudante-detail.component';


const routes: Routes = [
  { path: 'estudantes', component: EstudantesComponent },
  { path: 'estudantes', component: EstudantesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: EstudanteDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

