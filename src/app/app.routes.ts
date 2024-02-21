import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        loadComponent: () => import('./auth/inicio.component')
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component')
    },
    {
        path: 'recuperar-password',
        loadComponent: () => import('./auth/recuperar-contrasena/recuperar-contrasena.component')
    },
    {
        path: 'crear-cuenta',
        loadComponent: () => import('./auth/crear-cuenta/crear-cuenta.component')
    },
    {
        path: '',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
        //canActivate
    }
];
