import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from "../shared/image/image.component";

@Component({
  selector: 'app-variablereturndamper',
  imports: [CommonModule, ImageComponent],
  templateUrl: './variablereturndamper.component.html',
  styleUrl: './variablereturndamper.component.css'
})
export class VariablereturndamperComponent {

  product = {
    mainImg: '/products/variablereturn/main.png',
    name: 'Variable Return Damper',
    short: `VAV systems supply air at a variable airflow rate from an air handling unit (AHU). Because VAV systems can meet varying heating and cooling needs of different building zones, these systems are found in many commercial buildings. Unlike most other air distribution systems, VAV systems use flow control to efficiently condition each building zone while maintaining required minimum flow rates.There are two major classifications of VAV boxes or terminals—pressure dependent and pressure independent.A VAV box is considered pressure dependent when the flow rate passing through the box varies with the inlet pressure in the supply duct. This form of control is less desirable because the damper in the box is controlled in response to temperature only and can lead to temperature swings and excessive noise.
A pressure-independent VAV box uses a flow controller to maintain a constant flow rate regardless of variations in system inlet pressure. This type of box is more common and allows for more even and comfortable space conditioning. The balance of this guide will focus on pressure-independent VAV boxes
CAV is a constant air volume system, the supply air flow rate is constant, but the supply air temperature is varied to meet the thermal loads of a space. This type of system is used in the zones where a constant flow is required`,
    images: [
      {
        img: '/products/variablereturn/1.png',
        head: 'Top By Pass Variable air volume TBP 501 Series'
      },
      {
        img: '/products/variablereturn/4.png',
        head: 'Pressure Dependent Variable air volume TPD 600 Series'
      },
      {
        img: '/products/variablereturn/2.png',
        head: 'Pressure Independent Variable air volume TPI 700 Series'
      },
      {
        img: '/products/variablereturn/5.png',
        head: 'Side By Pass Variable Air Volume TBP 502 Series'
      },
      {
        img: '/products/variablereturn/3.png',
        head: 'Constant air volume type VAV TCV 800 Series1'
      },
    ]
  }

}
