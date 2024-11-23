import { Headphone } from "./Headphone"
import {translate} from "./Translator"

console.log(translate("hi"))
console.log(translate("10"))
console.log(translate("true"))

const headphone = new Headphone("Sony","USB-C",499)
console.log(headphone) 