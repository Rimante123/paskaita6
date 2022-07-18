//pirma užduotis
let ma1 = "Vytautas Šapranauskas";
let ma2 = "Donatas Banionis";
if (ma1.length > ma2.length) {
    console.log(ma1);
}
else {
    console.log(ma2);
}
//antra užduotis
let name1 = "Vytautas";
let name2 = "Šapranauskas";
console.log(name1.toLocaleUpperCase());

console.log(name2.toLocaleLowerCase());

//trečia užduotis
let nam1 = "Vytautas";
let sur1 = "Šapranauskas";
let fullName = nam1[0] + sur1[0];

console.log(fullName);

//ketvirta užduotis

let nname = "Vytautas";
let sname = "Šapranauskas";
let nextName = nname.substring(nname.length - 3) + sname.substring(sname.length -3);
console.log(nextName);

//penkta užduotis
let read = "An American in Paris";
let sread = read.replaceAll("a", "A");
console.log(sread.replaceAll("A", "*"));

//šešta užduotis
let ras1 = "An American in Paris";
let ras2 = "Breakfast at Tiffany's";
let ras3 = "2001: A Space Odyssey";
let ras4 = "It's a Wonderful Life";

console.log [ras1.replaceAll(/[aeiyou]/gi,"")];
console.log(ras2.replaceAll(/[aeiyou]/gi,""));
console.log(ras3.replaceAll(/[aeiyou]/gi,""));
console.log(ras4.replaceAll(/[aeiyou]/gi,""));

//septinta užduotis
let string1 = "Star Wars: Episode " + " ".repeat(Math.ceil(Math.random()*10))+(Math.ceil (Math.random()* 7)+1)+ " - A New Hope"