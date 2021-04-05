import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'users/:userId',
    component: UserDetailsComponent,
    pathMatch: 'full'
  },

  // https://localhost:4200/e12233fc-c121-4986-af32-d7d6d50eeeed?referer=http://localhost:8888/r/jec2Pevs0P
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
