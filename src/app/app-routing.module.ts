import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
{path:"list-user", component:AllUserComponent},
{path:"add-user", component:AddUserComponent},
{path:"update-user", component:UpdateUserComponent},
{path:"detail-user/:id", component:DetailUserComponent},
{path:"404", component:NoFoundComponent},
{path:"", component:AllUserComponent},
{path: '**', redirectTo: '404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
