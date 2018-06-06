import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {UserPageComponent} from './page-components/user-page.component';
import {UsersPageContentComponent} from './page-content.component';

const routes: Routes = [
  {
    path: '', component: UsersPageContentComponent, children: [
      {path: '', component: UsersComponent},
      {path: 'user/:id', component: UserPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
