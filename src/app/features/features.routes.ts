import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadChildren: () => import('../features/kanban/kanban.routes').then(m => m.kanbanRoutes)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
] satisfies Routes;