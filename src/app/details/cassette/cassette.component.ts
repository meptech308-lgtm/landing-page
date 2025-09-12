import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BenefitsComponent } from "../shared/benefits/benefits.component";
import { ProductCardComponent } from "../shared/product-card/product-card.component";
import { RandomlistComponent } from "../randomlist/randomlist.component";

@Component({
  selector: 'app-cassette',
  imports: [CommonModule, BenefitsComponent, ProductCardComponent, RandomlistComponent],
  templateUrl: './cassette.component.html',
  styleUrl: './cassette.component.css'
})
export class CassetteComponent {

  product = {
    mainImg: '/products/cassette/main.png',
    name: 'Cassette Solutions',
    short: 'Daikin air conditioning solutions provide comfort all year round for residential and commercial applications ranging from restaurants and offices to shops, hotels and banks. Our air conditioners use renewable energy from the air to reduce fuel bills and CO2 emissions.',
    about: 'Our Cassette Air Conditioners blend elegant design with premium cooling, offering the ideal solution for modern cooling needs. With multi airswing control providing various patterns for ultimate comfort, their sleek "round" contour and updated LED light placement enhance your decor effortlessly.',
    benifits: [
      'R-410A', 'Tropical Compressor', 'User Friendly',
      'Poweful cooling', 'Energy Saving', 'Silence'
    ],
    cards: [
      {
        head: 'Maximum Comfort',
        points: [
          "Daikin's air conditioning solutions provide comfort all year round, no matter how hot or cold it is outside. They create a perfect indoor climate while optimising energy efficiency."
        ]
      },
      {
        head: 'Integrated Solutions',
        points: [
          'Daikin’s air conditioning range can be combined with heating and ventilation systems, air curtains, refrigeration units and hot water provision to create a fully integrated, easy to control solution.'
        ]
      },
      {
        head: 'Wide Product Range',
        points: [
          'Daikin proudly presents the most comprehensive and diverse portfolio of products available on the market, ensuring that we have the perfect solution to meet your needs.'
        ]
      },
      {
        head: 'Trusted Support',
        points: [
          'Daikin offers complete after sales support in each country to bring total comfort and peace of mind to its customers around the world.'
        ]
      }
    ]
  }

}
