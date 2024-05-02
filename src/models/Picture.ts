export class Picture
{
    name:string="";
    year:string="";
    size:string="";
    location:string="";
    src:string="";
    author:string=""
    constructor(name:string,year:string,size:string,location:string,src:string,author:string)
    {
        this.name=name;
        this.year=year;
        this.size=size;
        this.location=location;
        this.src=src;
        this.author=author;
    }

}