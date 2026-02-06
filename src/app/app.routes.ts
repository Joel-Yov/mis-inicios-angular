import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-page-super/dragonball-page-super';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent,
    },
    {
        path: 'hero',
        component: HeroPageComponent,
    },
    {
        path: 'dragonball',
        component: DragonballPage
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperPage
    },
    // PARA PAGINAS NO ENCONTRADAS
    {
        path: '**',
        redirectTo: '',
    },
];
