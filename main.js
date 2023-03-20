
// 1. მომხმარებელს შემოაყვანინეთ რიცხვი და გაიგეთ ეს რიცხვი ლუწია თუ კენტი

// const num = prompt('Enter a number: ');
// if(num %2 ==0){
//     console.log("This number is even.");
// }
// else {
//     console.log("The number is odd.");
// }


// 2. მომხმარებელს შემოაყვანინეთ რიცხვი და გაიგეთ არის თუ არა ეს რიცხვი ერთდროულად 2-ის და 5-ის ჯერადი

// const number = prompt("Enter a number:");

// if (number % 2  &&  number % 5  === 0){
//     console.log(number + " " ,"რიცხვი არის 2-ის და 5-ის ჯერადი");
// }
// else if(number % 2 === 0) {
//   console.log(number + " " ,"რიცხვი არის 2-ის ჯერადი");
// } else if (number % 5 === 0) {
//   console.log(number + " " , " რიცხვი არის 5-ის ჯერადი");
// } else {
//   console.log(number + " " ," რიცხვი არ არის 2-ის და 5-ის ჯერადი");
// }



// 3. მომხმარებელს შემოაყვანინეთ ორი რიცხვი, a და b.  თუ a მეტია b-ზე a გაყავით b-ზე, თუ არა, მაშინ a გაამრავლეთ b-ზე და დააბრუნეთ პასუხი

// const a = parseFloat(prompt("შეიყვანეთ რიცხვი a:"));
// const b = parseFloat(prompt("შეიყვანეთ რიცხვი b:"));


// if (a > b) {
//   const result = a / b;
//   console.log("a>b-ზე ამიტომ , a/b " + result);
// } else {
//   const result = a * b;
//   console.log("a<b-ზე, ამიტომ , a*b-ზე" + result);
// }

// 4. მოცემულია მასივი
// [“apple”, ”pear”, ”banana”, "grape”, ”mango”]

// მასივის მეთოდების დახმარებით წაშალეთ ბოლო ელემენტი მასივიდან,ჩაამატეთ თქვენთვის სასურველი ხილი მასივის ბოლოში,წაშალეთ მასივის პირველი ელემენტი და ჩაამატეთ სხვა ხილი მასივის დასაწყისში  

// let fruits = ['apple', 'pear', 'banana', 'grape', 'mango'];
// let lastFruits =fruits.pop();
// let lastnewfruit = fruits.push ('Papaia');
// let firstFruit = fruits.shift();
// fruits.unshift('orange');
// console.log(fruits)