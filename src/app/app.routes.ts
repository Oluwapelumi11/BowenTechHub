import { Routes } from '@angular/router';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '',
        component:LandingPageComponent
    }
    ,{
        path: '**',
        component:ErrorPageComponent
    }
];
