import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { VrvivComponent } from './vrviv/vrviv.component';
import { VrvxComponent } from './vrvx/vrvx.component';
import { VrvaptComponent } from './vrvapt/vrvapt.component';
import { ConcealedacComponent } from './concealedac/concealedac.component';
import { WallsplitComponent } from './wallsplit/wallsplit.component';
import { RooftoppackageComponent } from './rooftoppackage/rooftoppackage.component';
import { CassetteComponent } from './cassette/cassette.component';
import { AirhandlingunitsComponent } from './airhandlingunits/airhandlingunits.component';
import { FancoilunitsComponent } from './fancoilunits/fancoilunits.component';
import { SoundatteComponent } from './soundatte/soundatte.component';
import { MotorizedComponent } from './motorized/motorized.component';
import { LineargrillsComponent } from './lineargrills/lineargrills.component';
import { LinearslotdiffucerComponent } from './linearslotdiffucer/linearslotdiffucer.component';
import { VolumecontrolComponent } from './volumecontrol/volumecontrol.component';
import { FiredamperComponent } from './firedamper/firedamper.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'vrviv', component: VrvivComponent },
  { path: 'vrvx', component: VrvxComponent },
  { path: 'vrvapt', component: VrvaptComponent },
  { path: 'concealedac', component: ConcealedacComponent },
  { path: 'wallsplit', component: WallsplitComponent },
  { path: 'rooftoppackage', component: RooftoppackageComponent },
  { path: 'cassette', component: CassetteComponent },
  { path: 'airhandling', component: AirhandlingunitsComponent },
  { path: 'fancoilunits', component: FancoilunitsComponent },
  { path: 'soundatte', component: SoundatteComponent },
  { path: 'motorized', component: MotorizedComponent },
  { path: 'lineargrills', component: LineargrillsComponent },
  { path: 'linerslotdiffuser', component: LinearslotdiffucerComponent },
  { path: 'volumecontrol', component: VolumecontrolComponent },
  { path: 'firedamper', component: FiredamperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
