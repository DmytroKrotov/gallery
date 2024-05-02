import { Picture } from "./Picture";
export class Painter
{
    name:string="";
    pictures:Picture[]=[];
    
    constructor(name?:string,pictures?:Picture[])
    {
        name?this.name=name:this.name="";
        pictures?this.pictures=pictures:[];
    }
        

}