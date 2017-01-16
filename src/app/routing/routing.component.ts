import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CommentsComponent} from '../comments/comments.component';
import {AboutComponent} from '../about/about.component';

const appRoutes: Routes = [
    {
        path:'',
        component: CommentsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);