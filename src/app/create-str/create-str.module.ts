import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateStrPageRoutingModule } from './create-str-routing.module';

import { CreateStrPage } from './create-str.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateStrPageRoutingModule
  ],
  declarations: [CreateStrPage]
})
export class CreateStrPageModule {}
