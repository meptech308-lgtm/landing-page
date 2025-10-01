import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  noteBackground = 'url(/banner2.png)';

  isMuted = true;
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.bgVideo.nativeElement.muted = this.isMuted;
  }

  toggleMute(video: HTMLVideoElement) {
    this.isMuted = !this.isMuted;
    video.muted = this.isMuted;
  }
}
