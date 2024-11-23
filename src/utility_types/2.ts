interface Book{
    title:string;
    author:string;
    price:number;
}

const book: Book = {
    title:"clean Code",
    author:"Robert martin",
    price:49
}

function updateBook(updatedProperties: Pick<Book, "price">){
    return Object.assign(book, updatedProperties)


}

const updatedProperties = {
    price:69,
    title:"ref"
}

console.log(updateBook(updatedProperties))

