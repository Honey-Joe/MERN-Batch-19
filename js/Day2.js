// Array in JS
// => Collection of elements
// => it contain list of different data type.
// => array can contain more then one elements.
// => it always enclosed with square bracket

// var arr = [10, 20, 30, "hello", true, null]; // 6

// Accessing the data in the array
// We can access the array using the index value , [0]
// index value is always start from  ( 0 ) , n - 1;
// length is always start from ( 1 )

// console.log(arr.length);
// console.log(arr[0]); // [0] index value

// Adding the new element in the array

// var arr = [10, 20, 30, "hello", true, null];

// arr[6] = "last index";
// push , unshift
// push => add the element at the end
// unshift => add the element at the beginning
// arr.unshift("start");
// arr.push("end");
// console.log(arr);

// Modifying the array element
// var arr = [10, 20, 30, "hello", true, null];
// arr[3] = true;
// console.log(arr);

// Removing the element in the array
// pop , shift
// pop => remove the element at the end
// shift => remove the element at the beginning

// var arr = [10, 20, 30, "hello", true, null];
// arr.shift();
// arr.pop();
// console.log(arr);

// object
// => Collection of properties
// => each properties have ( key and value )
// => list of different data type,
// => more then one elements
// => object is always enclosed with curly bracket { }

// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: 19,
//   learning: true,
//   classMate: ["ajay", "dhanu", "janani"],
//   things: { mobile: "Iphone", laptop: "asus" },
// };

// Accessing the objects properties
// dot ( . ) , bracket ( [""] )

// dot notation ( . )
// console.log(obj.class);

// bracket notation [""]
// console.log(obj["name"]);

// console.log(obj.things["laptop"]);

// Adding properties in the object
// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: 19,
//   learning: true,
//   classMate: ["ajay", "dhanu", "janani"],
//   things: { mobile: "Iphone", laptop: "asus" },
// };

// obj["batch"] = "2025";

// console.log(obj);

// modifying:
// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: 19,
//   learning: true,
//   classMate: ["ajay", "dhanu", "janani"],
//   things: { mobile: "Iphone", laptop: "asus" },
// };

// obj.classMate[1] = "alex";
// console.log(obj);

// Remove
// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: 19,
//   learning: true,
//   classMate: ["ajay", "dhanu", "janani"],
//   things: { mobile: "Iphone", laptop: "asus" },
// };

// delete obj.learning;

// console.log(obj);
