class Rectangle{
    length:number ;
    width:number ;

    constructor(length:number , width:number){
        this.length=length;
        this.width=width;
    }

    calculateArea(): number {
        return this.length*this.width ;
    }
    calculatePerimeter(): number {
        return 2 * (this.length+this.width)
    }
}
const lengthInput=4 ;
const widthInput=4 ;
const rectangle= new Rectangle(lengthInput, widthInput)


console.log(`rectangle with length ${rectangle.length} and width ${rectangle.width}`)
console.log(`area ${rectangle.calculateArea()}`) ;
console.log(` perimeter ${rectangle.calculatePerimeter()}`);

