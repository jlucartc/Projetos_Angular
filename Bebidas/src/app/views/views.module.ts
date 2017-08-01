import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcasComponent } from './marcas/marcas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MarcasComponent],
  exports : [MarcasComponent]
})
export class ViewsModule { }
