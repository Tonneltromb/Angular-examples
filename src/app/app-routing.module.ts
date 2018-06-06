import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './system/content/home-page.component';
import {ForumPageComponent} from './system/content/forum-page/forum-page.component';
import {FormsPageComponent} from './system/content/forms-page/forms-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'users', loadChildren: './system/content/users-page/users.module#UsersModule'},
  {path: 'forum', component: ForumPageComponent},
  {path: 'forms', component: FormsPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
