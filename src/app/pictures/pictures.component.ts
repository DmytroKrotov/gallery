import { Component } from '@angular/core';
import { Painter } from '../../models/Painter';
import { PainterService } from '../../services/painters.service';
import { GalleryComponent } from '../gallery/gallery.component';
import { PainterGalleryComponent } from '../painter-gallery/painter-gallery.component';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [GalleryComponent,PainterGalleryComponent],
  providers:[PainterService],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.css'
})
export class PicturesComponent {
  
  painters:Painter[];
  currentPainter!:Painter;
  currentPicture: string="";
  constructor( service:PainterService)
  {
    this.painters=service.GetPainters();
    this.currentPainter=this.painters[0];
  }

  onCurrentPainterChange(painter:Painter)
  {
    this.currentPainter=painter;
  }

  getCurrentPictureSrc(source: string)
  {
    
    this.currentPicture=source;
    
  }


  
}
