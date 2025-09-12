import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeaturesComponent } from "../shared/features/features.component";

@Component({
  selector: 'app-thermostat',
  imports: [CommonModule, FeaturesComponent],
  templateUrl: './thermostat.component.html',
  styleUrl: './thermostat.component.css'
})
export class ThermostatComponent {

  product = {
    mainImg: '/products/thermostat/main.png',
    name: 'Thermostat',
    short: `MEPTECH manufactures Cross talk attenuators (CTA) to avoid noise interface between inter-
connected Areas or rooms. It provides a low resistance to air flow whilst maintaining a high

degree of acoustic attenuation. The CTA series
should be considered wherever a relief air passage is required to penetrate a building's acoustic
barrier. Straight cross talk attenuators are
designed to use in simple wall penetration above
ceiling and in in-line duct where rooms are served
by the branches off a main duct. The casing construction conforms to DW142 Class B ductwork
code. Z type cross talk attenuator is designed to
use where installation of CTA is within the wall.`,
    features: [
      'Casing: Galvanized steel sheet of 0.8*mm / 1.0 mm thick to BS2989 grade Z2 G275; the construction complies with DW142 class B code.',
      'Buffles: Baffles are designed in sandwich shape which is having one side 0.8*mm / 1.0 mm thick galvanized steel sheet and another side as 0.8*mm thick GI perforated sheet, it is filled acoustic material which is inorganic, incombustible, has a class 1 fire rating to BS476. The infill material has a glass tissue facing and is contained behind the perforated sheet.'
    ],
    table: [
      {
        srNo: 1,
        type: "Straight",
        width: "300 mm",
        height: "200 mm",
        length: ["600 mm", "900 mm", "1800 mm"],
        dbReduction: [7, 12, 20]
      },
      {
        srNo: 2,
        type: "Straight",
        width: "300 mm",
        height: "300 mm",
        length: ["600 mm", "900 mm", "1800 mm"],
        dbReduction: [8, 15, 20]
      },
      {
        srNo: 3,
        type: "Straight",
        width: "300 mm",
        height: "400 mm",
        length: ["600 mm", "900 mm", "1800 mm"],
        dbReduction: [10, 20, 28]
      },
      {
        srNo: 4,
        type: "Z-Type",
        width: "300 mm",
        height: "200 mm",
        length: ["600 mm", "900 mm", "1800 mm"],
        dbReduction: [23, 27, 22]
      },
      {
        srNo: 5,
        type: "Z-Type",
        width: "300 mm",
        height: "300 mm",
        length: ["600 mm", "900 mm", "1800 mm"],
        dbReduction: [24, 28, 22]
      },
      {
        srNo: 6,
        type: "Z-Type",
        width: "300 mm",
        height: "400 mm",
        length: ["600 mm", "900 mm", "1800 mm"],
        dbReduction: [25, 22, 29]
      }
    ],
    table2: [
      {
        srNo: 1,
        type: "Straight",
        length: "600 mm",
        values: {
          "63Hz": 5,
          "125Hz": 7,
          "250Hz": 10,
          "500Hz": 15,
          "1K": 23,
          "2K": 17,
          "4K": 13,
          "8K": 11
        }
      },
      {
        srNo: 2,
        type: "Straight",
        length: "900 mm",
        values: {
          "63Hz": 6,
          "125Hz": 14,
          "250Hz": 17,
          "500Hz": 21,
          "1K": 28,
          "2K": 30,
          "4K": 25,
          "8K": 17
        }
      },
      {
        srNo: 3,
        type: "Straight",
        length: "1800 mm",
        values: {
          "63Hz": 10,
          "125Hz": 20,
          "250Hz": 26,
          "500Hz": 35,
          "1K": 39,
          "2K": 40,
          "4K": 39,
          "8K": 32
        }
      },
      {
        srNo: 4,
        type: "Z-Type",
        length: "600 mm",
        values: {
          "63Hz": 6,
          "125Hz": 8,
          "250Hz": 12,
          "500Hz": 16,
          "1K": 25,
          "2K": 28,
          "4K": 20,
          "8K": 17
        }
      },
      {
        srNo: 5,
        type: "Z-Type",
        length: "900 mm",
        values: {
          "63Hz": 7,
          "125Hz": 16,
          "250Hz": 21,
          "500Hz": 21,
          "1K": 36,
          "2K": 39,
          "4K": 36,
          "8K": 24
        }
      },
      {
        srNo: 6,
        type: "Z-Type",
        length: "1800 mm",
        values: {
          "63Hz": 11,
          "125Hz": 21,
          "250Hz": 28,
          "500Hz": 28,
          "1K": 39,
          "2K": 40,
          "4K": 39,
          "8K": 32
        }
      }
    ],
    tableName: 'Dimensional and Noise Reduction',
    tableName2: 'Insertion Loss (dB)'
  }

}
