const cats=["Milo", "Otis", "Garfield"];

//Want to reset cats array before every function
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(name){
    return cats.push(name); //Destructively adds element to end of array
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat(name){
    return cats.unshift(name); //Destructively adds element to front of array
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat(name){
    return cats.pop(); //Destructively removes last element of array
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat(name){
    return cats.shift(); //Destructively removes first element of array
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function appendCat(name){
    return [...cats, name]; //Spread operator allows us to manipulate cats w/o undestructively
};

function prependCat(name){
    return [name, ...cats];
};

function removeLastCat(){
    return [...cats.slice(0 , cats.length - 1)]; //Silce also preserves the original array
};

function removeFirstCat(){
    return cats.slice(1 , cats.length);
}