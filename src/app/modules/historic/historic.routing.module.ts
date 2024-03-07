import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricComponent } from './historic-component/historic.component';
import { HistoricItemComponent } from './historic-item/historic-item.component';

const routes: Routes = [
    {
        path: '',
        component: HistoricComponent
    },
    {
        path: 'historic',
        component: HistoricComponent
    },
    {
        path: 'item/:id',
        component: HistoricItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HistoricRoutingModule {}
