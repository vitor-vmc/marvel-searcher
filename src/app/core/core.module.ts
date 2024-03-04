import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [provideClientHydration(),provideAnimationsAsync()]
})
export class CoreModule { }
