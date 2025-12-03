import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-newsletter',
  imports: [],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent implements OnInit {
    constructor(private title: Title) {}
    ngOnInit(): void {
    this.title.setTitle('Newsletter | MEPTECH Air-condition Trading LLC');
    }
}
