import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { VrvivComponent } from './vrviv/vrviv.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'vrviv', component: VrvivComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
