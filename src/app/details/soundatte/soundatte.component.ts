import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RandomlistComponent } from "../randomlist/randomlist.component";

@Component({
  selector: 'app-soundatte',
  imports: [CommonModule, RandomlistComponent],
  templateUrl: './soundatte.component.html',
  styleUrl: './soundatte.component.css'
})
export class SoundatteComponent {

  product = {
    mainImg: '/products/soundatte/main.png',
    name: 'Sound Attenuators',
    short: `For the best efficiencY,We supplies sound attenuators which are used as a wholesome component of an HVAC system rather than in isolation. They are used when the device is mounted instead of adding them later for the best effect. To keep the sound down, noise attenuators have sound absorbing insulation inside.
A sound attenuator consists of a deflection inside the ductwork in its simplest form. Such baffles also contain materials which absorb sound. In order to attenuate a specific spectrum of frequencies, the physical dimensions and baffle configuration of sound attenuators are chosen. Unlike traditional internal-lined ductwork, which is only efficient in attenuating mid- and high-frequency noise, in relatively short lengths, sound attenuators can achieve wider band attenuation. Some forms of sound attenuators are basically a Helmholtz resonator used as a passive noise control system.`
  }

}
