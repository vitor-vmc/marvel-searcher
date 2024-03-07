import { NgModule } from '@angular/core';
import { HistoricComponent } from './historic-component/historic.component';
import { SharedModule } from '../../shared/shared.module';
import { HistoricRoutingModule } from './historic.routing.module';
import { CoreModule } from '../../core/core.module';
import { HistoricItemComponent } from './historic-item/historic-item.component';



@NgModule({
  declarations: [
    HistoricComponent,
    HistoricItemComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    HistoricRoutingModule
  ]
})
export class HistoricModule { }
