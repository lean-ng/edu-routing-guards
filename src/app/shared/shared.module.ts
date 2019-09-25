import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CardComponent
  ]
})
export class SharedModule { }
