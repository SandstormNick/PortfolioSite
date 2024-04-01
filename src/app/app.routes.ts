import { Routes } from '@angular/router';
import { WorkComponent } from './components/main/work/work.component';
import { AboutComponent } from './components/main/about/about.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Work',
        component: WorkComponent
    },
    {
        path: 'about',
        title: 'About',
        component: AboutComponent
    }
];
