import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateStrPage } from './create-str.page';

const routes: Routes = [
  {
    path: '',
    component: CreateStrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateStrPageRoutingModule {}
