import { NgModule } from '@angular/core';
import { HomeComponent } from './home-component/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
