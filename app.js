// 1.შექმენით html და app.js ფაილები. შემოტანეთ app.js html-ში.

// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.
const myNum = 10,
	myStr = "name",
	myBool = true,
	myUndefined = undefined,
	myNull = null;

// console.log(myNum, myStr, myBool, myUndefined, myNull);

// 3. დამატებით შექმენით ცვლადები  myComputerManufacturer, myComputerMemory,  myComputerOS,  computerBuyingYear, currentYear  და მიანიჭეთ თქვენი კომპიუტერის  მწარმოებლის, მეხსიერების, ოპერაციული სისტემის, კომპიტერის ყიდვის და მიმდინარე წლის მნიშვნელობები

const myComputerManufacturer = "lenovo";
const myComputerMemory = "1tb";
const myComputerOS = "windows";
const computerBuyingYear = 2022;
const currentYear = 2023;

// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება: 'my computer is (აქ myComputerManufacturer ცვლადი), it runs on (აქ myComputerOS ცვლადი) and I've been using it for (აქ გამთვალეთ კომპიუტერით სარგებლობის წლები  currentYear,   computerBuyingYear  ცვლადების გამოყენებით) years '. გამოიყენეთ წინადადების აწყობის ლექციაზე განხილული ორივე სინტაქსი.

const string1 = `my computer is  ${myComputerManufacturer}, it runs on ${myComputerOS}  and I've been using it for  ${
	currentYear - computerBuyingYear
} years `;

// console.log(string1);

// console.log(
// 	"my computer is " +
// 		myComputerManufacturer +
// 		", it runs on " +
// 		myComputerOS +
// 		"  and I've been using it for " +
// 		(currentYear - computerBuyingYear) +
// 		" years "
// );

// array

let myUndefined2;

const myArr = [
	2,
	,
	4,
	[1, 2, 3, [1, 2, 3, [0, 1, 2]]],
	6,
	"name",
	true,
	null,
	undefined,
	myComputerOS,
	myUndefined2,
];

// console.log(myArr);

const prices = [100, 200, 300, 400];

const firstEl = myArr[0];
const myArrLength = myArr.length;
const two = 2;
const last = myArr[myArrLength - 1];

// console.log(myArr[two][3]);
// console.log(myArr.at(-2));

// const newLength = myArr.push(myComputerManufacturer);
// console.log(newLength, myArr);
// myArr.unshift("some text");
// const lastEl = myArr.pop();
// myArr.shift();

// console.log(myArr);

const laptop = {
	manufactorer: "lenovo",
	memory: "1tb",
	os: "windows",
	currentYear: 2023,
	stores: ["tbilis store 1", "tbilisi store 2"],
};

laptop.memory = "512gb";
laptop.buyingYear = 2022;

let myVariable = "memory";

delete laptop.currentYear;

// console.log(laptop);

const brands = {
	lenovo: [
		{
			model: "thinkpad",
			os: "windows",
			stores: ["tbilis store 1", "tbilisi store 2"],
		},
		{
			model: "ideapad",
			os: "linux",
			contact: {
				phone: "21363186316",
				email: "exaple@gmail.com",
			},
		},
	],
	apple: [
		{
			model: "macbook air",
			os: "windows",
		},
		{
			model: "macbook pro",
			os: "linux",
		},
	],
};

// console.log(brands.apple[1].model);

const currencies = [
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.5315",
		diffFormated: "0.0045",
		rate: 6.5315,
		name: "სომხური დრამი",
		diff: -0.0045,
		date: "2023-04-06T17:45:12.225Z",
		validFromDate: "2023-04-07T00:00:00.000Z",
	},
	{
		code: "AZN",
		quantity: 1,
		rateFormated: "1.4956",
		diffFormated: "0.0019",
		rate: 1.4956,
		name: "აზერბაიჯანული მანათი",
		diff: -0.0019,
		date: "2023-04-06T17:45:12.225Z",
		validFromDate: "2023-04-07T00:00:00.000Z",
	},
	{
		code: "USD",
		quantity: 1,
		rateFormated: "2.5375",
		diffFormated: "0.0045",
		rate: 2.5375,
		name: "აშშ დოლარი",
		diff: -0.0045,
		date: "2023-04-06T17:45:12.225Z",
		validFromDate: "2023-04-07T00:00:00.000Z",
	},
];

// let num1 = 10;
// let num2 = num1;

// console.log(num1, num2);

// num1 = 20;
// console.log(num1, num2);

// let arr1 = [0, 1, 2];

// let arr2 = [...arr1, 100];

// console.log(arr1, arr2);

// arr2.push(100, 200, 300);
// console.log(arr1, arr2);
