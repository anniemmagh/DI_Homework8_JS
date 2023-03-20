
// 1. მომხმარებელს შემოაყვანინეთ რიცხვი და გაიგეთ ეს რიცხვი ლუწია თუ კენტი

// const num = prompt('Enter a number: ');
// if(num %2 ==0){
//     console.log("This number is even.");
// }
// else {
//     console.log("The number is odd.");
// }


// 2. მომხმარებელს შემოაყვანინეთ რიცხვი და გაიგეთ არის თუ არა ეს რიცხვი ერთდროულად 2-ის და 5-ის ჯერადი

const number = prompt("Enter a number:");

if (number % 2  &&  number % 5  === 0){
    console.log(number + " " ,"რიცხვი არის 2-ის და 5-ის ჯერადი");
}
else if(number % 2 === 0) {
  console.log(number + " " ,"რიცხვი არის 2-ის ჯერადი");
} else if (number % 5 === 0) {
  console.log(number + " " , " რიცხვი არის 5-ის ჯერადი");
} else {
  console.log(number + " " ," რიცხვი არ არის 2-ის და 5-ის ჯერადი");
}