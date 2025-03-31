import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';  // ✅ Import GalleryComponent


@Component({
  selector: 'app-about',
  imports: [GalleryComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
