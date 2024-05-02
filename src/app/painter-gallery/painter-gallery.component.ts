import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Painter } from '../../models/Painter';
import { Picture } from '../../models/Picture';


@Component({
  selector: 'app-painter-gallery',
  standalone: true,
  imports: [],
  templateUrl: './painter-gallery.component.html',
  styleUrl: './painter-gallery.component.css'
})
export class PainterGalleryComponent {
  @Input() currentPainter:Painter=new Painter();
  @Output() onPictureClick: EventEmitter<string>=new EventEmitter<string>();

  onClick(event: Event)
  {
    let element=event.target as HTMLElement;
    let source=element.getAttribute("src");
    
    this.onPictureClick.emit(source!);
  }
}
