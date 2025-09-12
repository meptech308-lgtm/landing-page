import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { VrvivComponent } from './vrviv/vrviv.component';
import { VrvxComponent } from './vrvx/vrvx.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'vrviv', component: VrvivComponent },
  { path: 'vrvx', component: VrvxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
