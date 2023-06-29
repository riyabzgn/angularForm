import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomvComponent } from './customv/customv.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path: '', redirectTo:'customv', pathMatch: 'full'},
  { path: 'customv', component: CustomvComponent},
  { path: 'user-detail', component: UserDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
