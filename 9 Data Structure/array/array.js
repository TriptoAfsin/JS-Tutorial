let my_array = [1, 3, 5];
let my_num_array = [1, 2.5, 5, 5.6];
let my_new_array = ["Apple", "Banana", "Orange"];
let new_array = [1 , 2, "Cat"];

console.log(my_array); //prints the array
console.log(my_array[0]); //prints a specific element

console.log(my_new_array);
console.log(new_array.length);

console.clear();

//pushing an element to the array
my_array.push(7, 9, 11);
console.log(my_array);

//removing the last element
my_array.pop();
console.log(my_array);

//removing a specific element
let index_pos;
while((index_pos = my_array.indexOf(3)) > -1){
    my_array.splice(index_pos, 1);
}

console.log(my_array);


//Filtering an array
let filterd_array = my_num_array.filter(number => number >1);
console.log(filterd_array);

//Finding a sepcific element
console.log(my_new_array.indexOf("Orange"));


//Checking a specific value 
console.log(my_new_array.includes("Apple"));


