import { RouterModule, Routes } from '@angular/router';
import { DisneyCharactersComponent } from './components/disney-characters/disney-characters.component';
import { NgModel } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'characters',
        component: DisneyCharactersComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
