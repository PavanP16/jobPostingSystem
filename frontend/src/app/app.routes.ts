import { RouterModule, Routes } from '@angular/router';
import { RegisterCandidateComponent } from './register-candidate/register-candidate.component';
import { ListCandidatesComponent } from './list-candidates/list-candidates.component';
import { CreateJobPortalComponent } from './create-job-portal/create-job-portal.component';
import { ListJobPortalsComponent } from './list-job-portals/list-job-portals.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'register-candidate',
    component: RegisterCandidateComponent,
    canActivate: [AuthGuard], data: { role: 'user' }
  },
  {
    path: 'list-candidates',
    component: ListCandidatesComponent,
    canActivate: [AuthGuard], data: { role: 'user' }
  },
  {
    path: 'create-job-portal',
    component: CreateJobPortalComponent,
    canActivate: [AuthGuard], data: { role: 'admin' }
  },
  {
    path: 'list-job-portals',
    component: ListJobPortalsComponent,
    canActivate: [AuthGuard], data: { role: 'user' }

  },
  {
    path: '',
    component: LoginComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }