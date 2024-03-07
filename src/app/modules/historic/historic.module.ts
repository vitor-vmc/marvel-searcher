import { NgModule } from '@angular/core';
import { HistoricComponent } from './historic-component/historic.component';
import { SharedModule } from '../../shared/shared.module';
import { HistoricRoutingModule } from './historic.routing.module';
import { CoreModule } from '../../core/core.module';



@NgModule({
  declarations: [
    HistoricComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    HistoricRoutingModule
  ]
})
export class HistoricModule { }
