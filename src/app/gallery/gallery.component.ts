import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Painter } from '../../models/Painter';
import { Picture } from '../../models/Picture';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  @Input() painters:Painter[]=[];
   currentPicture: string="";
  
  
   @Input() get CurrentPicture() : string {
    return this.currentPicture;
  }
  set CurrentPicture(v : string) {
    //finde current index
    const newCurrentIndex: number=this.gallery.findIndex((item)=>item.src==v);
    if(newCurrentIndex!=0&&newCurrentIndex!=this.gallery.length-1)
      {
        this.currentPictureIndex=newCurrentIndex;
        this.leftPictureIndex=newCurrentIndex-1;
        this.rightPictureIndex=newCurrentIndex+1;
      }
      if(newCurrentIndex==0)
        {
          this.currentPictureIndex=newCurrentIndex;
          this.leftPictureIndex=this.gallery.length-1;
          this.rightPictureIndex=newCurrentIndex+1;
        }
        if(newCurrentIndex==this.gallery.length-1)
          {
            this.currentPictureIndex=newCurrentIndex;
            this.leftPictureIndex=newCurrentIndex-1;
            this.rightPictureIndex=0;
          }
    

    this.currentPicture = v;
  }
  
  
  @Output() currentPainterEvent=new EventEmitter<Painter>();
  gallery:Picture[]=this.getPictures();
  currentPictureIndex!:number;
  leftPictureIndex!:number;
  rightPictureIndex!:number;
  ngOnInit(): void {
    this.gallery=this.getPictures();
    this.currentPictureIndex=this.gallery.length/2;
    this.leftPictureIndex=this.currentPictureIndex-1;
    this.rightPictureIndex=this.currentPictureIndex+1;
    
  }
  

  getPictures(): Picture[]
  {
    let pictures:Picture[]=[];
    if(this.painters.length!=0)
      {
        for(let item of this.painters)
          {
              pictures=pictures.concat(item.pictures);
          }
      }
    
    return pictures;
  }

  onRightPictureClick()
  {
    this.rightPictureIndex==this.gallery.length-1?this.rightPictureIndex=0:this.rightPictureIndex++;
    this.currentPictureIndex==this.gallery.length-1?this.currentPictureIndex=0:this.currentPictureIndex++;
    this.leftPictureIndex==this.gallery.length-1?this.leftPictureIndex=0:this.leftPictureIndex++;
    let current: Painter=this.painters.find((item)=>item.name==this.gallery[this.currentPictureIndex].author)!;
    this.currentPainterEvent.emit(current);
    
  }

  onLeftPictureClick()
  {

    this.leftPictureIndex==0?this.leftPictureIndex=this.gallery.length-1:this.leftPictureIndex--;
    this.currentPictureIndex==0?this.currentPictureIndex=this.gallery.length-1:this.currentPictureIndex--;
    this.rightPictureIndex==0?this.rightPictureIndex=this.gallery.length-1:this.rightPictureIndex--;
    let current: Painter=this.painters.find((item)=>item.name==this.gallery[this.currentPictureIndex].author)!;
    this.currentPainterEvent.emit(current);
    
  }

}
