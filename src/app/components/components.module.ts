 
import { TinderCardComponent } from './tinder-card/tinder-card.component';
 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const components = [
  TinderCardComponent,
];
@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ...components,
  ]
})
export class ComponentModule { }
