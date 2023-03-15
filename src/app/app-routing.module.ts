import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparefilesComponent } from './comparefiles/comparefiles.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'auth/callback', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'comparefiles', component: ComparefilesComponent, canActivate: [AuthenticationGuard] },
  // {path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
