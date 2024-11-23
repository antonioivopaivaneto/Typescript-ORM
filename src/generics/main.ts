import Book from "../Book";
import { Person } from "./Person";
import { Respository } from "./Repository";

const persons = new Respository<Person>();
persons.add(new Person("Bob Martin", 60));
console.log(persons);
