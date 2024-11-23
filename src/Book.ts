export default class Book{

    constructor(readonly title:string, readonly author:string){}
    
    getTitle(){
        console.log("title: " + this.title);
    }
    
}