import { Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import { MatchdirectComponent } from './pages/match-direct/match-direct.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    }
    ,
    {
        path: 'match-direct',
        component: MatchdirectComponent
    }
    ,
    {
        path: 'register',
        component: RegisterComponent
    }
    ,
    {
        path: 'login',
        component: LoginComponent
    }
];
