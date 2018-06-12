import {NgModule} from '@angular/core';
import {UsersService} from '../../common/service/users.service';
import {UserListComponent} from './page-components/user-list.component';
import {UserDetailsComponent} from './page-components/user-details.component';
import {AddFormComponent} from './page-components/add-user-form/add-form.component';
import {PrimeNgImports} from '../../common/primeNg-imports';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users-routing.module';
import {UserPageComponent} from './page-components/user-page.component';
import {UsersPageContentComponent} from './page-content.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgImports,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailsComponent,
    AddFormComponent,
    UserPageComponent,
    UsersPageContentComponent
  ],
  providers: [UsersService]
})

export class UsersModule {}
