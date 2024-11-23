import  Entity, * as x  from "./Entity";

export class Respository<T extends Entity> {
    list: T[];
  
    constructor() {
        console.log(x.max)
      this.list = [];
    }
  
    add(element: T) {
      this.list.push(element);
    }
  }