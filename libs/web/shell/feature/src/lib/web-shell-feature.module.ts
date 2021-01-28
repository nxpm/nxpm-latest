import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WebAuthDataAccessModule, IsLoggedInGuard } from '@nxpm-latest/web/auth/data-access'
import { WebCoreDataAccessModule } from '@nxpm-latest/web/core/data-access'
import { WebLayoutComponent } from '@nxpm-latest/web/layout'

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      // Application routes here
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'about',
        loadChildren: () => import('@nxpm-latest/web/about/feature').then((m) => m.WebAboutFeatureModule),
      },
      {
        path: 'account',
        loadChildren: () => import('@nxpm-latest/web/account/feature').then((m) => m.WebAccountFeatureModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('@nxpm-latest/web/admin/feature').then((m) => m.WebAdminFeatureModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@nxpm-latest/web/dashboard/feature').then((m) => m.WebDashboardFeatureModule),
      },
      {
        path: 'not-found',
        loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('@nxpm-latest/web/auth/feature').then((m) => m.WebAuthFeatureModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), WebCoreDataAccessModule, WebAuthDataAccessModule],
})
export class WebShellFeatureModule {}
