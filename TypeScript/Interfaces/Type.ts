// like a type;

interface Operation {
    chip : string;
    ram : number; 
    hdd : number;
}

const computerDetails : Operation = {
    chip : "i7",
    ram : 8,
    hdd : 100
}

console.log(computerDetails.chip)
// when prints, it's i7


interface Movie {
    readonly name : string,
    rating : number, 
    date : string,
    priority ? : boolean
}

const movie1 : Movie = {
    name : "Morbius",
    rating : 3, 
    date : "21th Aug 2024",
    priority : true
}



