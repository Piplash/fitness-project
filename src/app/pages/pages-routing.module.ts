import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import PagesComponent from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { 
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('./dashboard/dashboard.component')
      },
      { 
        path: 'mi-entrenamiento',
        title: 'Mi Entrenamiento',
        loadComponent: () => import('./mi-entrenamiento/mi-entrenamiento.component')
      },
      { 
        path: 'ajustes',
        title: 'Ajustes',
        loadComponent: () => import('./ajustes/ajustes.component')
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
