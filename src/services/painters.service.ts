import { Painter } from "../models/Painter"
import { Picture } from "../models/Picture";
export class PainterService
{
    painters:Painter[]=[];

    constructor()
    {
        this.painters=[
            new Painter("Camille Corot",[new Picture("View of Provins","1842","21*29","Paris","../assets/provins.jpeg","Camille Corot"),new Picture("Diana and Actaeon","1836","156*112","Paris","../assets/diana.jpeg","Camille Corot")]),
            new Painter("Vincent van Gogh",[new Picture("Road in Etten","1881","39*57","Zundert","../assets/road.jpeg","Vincent van Gogh"),new Picture("Shoes","1888","45*55","London","../assets/shoes.jpeg","Vincent van Gogh"),new Picture("Irises","1890","73*92","Paris","../assets/irises.jpeg","Vincent van Gogh")]),
            new Painter("Claude Monet",[new Picture("Path in mone garden","1902","89*92","Vienna","../assets/monet-path-in-monet-garden.webp","Claude Monet"),new Picture("Garden in Sainte-Adress","1867","98*129","Berlin","../assets/saint.jpeg","Claude Monet"),new Picture("Landscape","1864","21*42","Rome","../assets/landscape.jpeg","Claude Monet")])
        ];
    }

    GetPainters():Painter[]
    {
        return this.painters;
    }
}