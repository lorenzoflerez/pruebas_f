import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';
import { LoginComponent } from './modules/shared/components/login/login.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
];
/*
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
    { path: 'login', component: LoginComponent }
/* @NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: false, useHash: true}
  ),
  DashboardRoutingModule
  ],
  exports: [RouterModule]
})
*/

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false}), DashboardRoutingModule],
  exports: [RouterModule]
})

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) */

export class AppRoutingModule { }
