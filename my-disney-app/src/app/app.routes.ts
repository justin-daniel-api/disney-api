import { RouterModule, Routes } from '@angular/router';
import { DisneyCharactersComponent } from './components/disney-characters/disney-characters.component';
import { NgModel } from '@angular/forms';

export const routes: Routes = [
    {
        path: '',
        component: DisneyCharactersComponent
    }
];
