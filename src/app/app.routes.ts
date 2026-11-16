/*
 * Copyright (c) 2026 IANEL Technologies. All rights reserved.
 * Designed and developed by IANEL Technologies.
 */
import { Routes } from '@angular/router';

// The Amsidel Group website: one page. Doors & Windows is its own website (see data/sites.ts).
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Amsidel Enterprises Private Limited',
    loadComponent: () => import('./pages/landing/landing').then((m) => m.Landing),
  },
  { path: '**', redirectTo: '' },
];
