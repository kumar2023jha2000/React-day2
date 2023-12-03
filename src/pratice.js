// // array literal
// let myArray = [1,32,3,4,5,6];
// console.log(`array  by literal ${myArray} `);

// // array constructor
// let secondArray = new Array("chandan", 2, 3, 4, 5, true);
// console.log(`array  by constructor ${secondArray} `);

// //assecs the array element 
// console.log(myArray[1]) // 1

// //passing constructor
// let element = Array("chandan", true) // [,,,,]
// console.log(element)


let praticeArray = [1,2,3,[2,[67,34]], "chandan"];
// let practiceArray = [1, 2, 3, 4, 4, true, false, [2, [67, 34, 5, 6, 7, 7, 3], 2], "chandan"];


 // addind element in array
 praticeArray.push(1,2,637,23)
 console.log(praticeArray)

// //remove element ( pop(), shift() )

// //pop()
// praticeArray.pop()
// console.log(praticeArray)
  
// //shift()
// praticeArray.shift()
// console.log(praticeArray)

// copy and clone array (slice())
let color = ['red', 'green' , 'pink', 'purple', 'blue', 'yellow']
let copyArray = color.slice(-4,-1)
console.log(copyArray)