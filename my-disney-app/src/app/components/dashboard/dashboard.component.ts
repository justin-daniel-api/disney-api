import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [NgOptimizedImage],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        placeHolderResolution: 40
      }
    },
  ],
})
export class DashboardComponent {

  image_2 = "assets/images/dashboard-1.jpg";
  image_1 = "assets/images/dashboard-3.jpg";
}
