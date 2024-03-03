import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideClientHydration } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [provideClientHydration()]
})
export class CoreModule { }
