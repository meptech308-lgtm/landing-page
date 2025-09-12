import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { VrvivComponent } from './vrviv/vrviv.component';
import { VrvxComponent } from './vrvx/vrvx.component';
import { VrvaptComponent } from './vrvapt/vrvapt.component';
import { ConcealedacComponent } from './concealedac/concealedac.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'vrviv', component: VrvivComponent },
  { path: 'vrvx', component: VrvxComponent },
  { path: 'vrvapt', component: VrvaptComponent },
  { path: 'concealedac', component: ConcealedacComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
