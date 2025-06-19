let sentence = "Ali and Sami are best friends. They play cricket and football together";
let reg = new RegExp("and" , "gi")
let newString = sentence.replace(reg , "&")
document.writeln(`${newString}`)