// problem-1
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper) {
        console.log((`${input}`).toUpperCase(), `: ${toUpper}`)
    } else {
        console.log(input)
    }
}

// formatString('hello', true)

// problem-2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4)
}

const products = [
    { title: "Product A", rating: 4.5 },
    { title: "Product B", rating: 3.8 },
    { title: "Product C", rating: 4.0 },
    { title: "Product D", rating: 2.9 }
];

var result = filterByRating(products);
// console.log(result)

// problem-3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// problem-4
class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year); // Vehicle class-এর constructor কল করা হচ্ছে
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}

// 🔍 উদাহরণ ব্যবহার:
const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());   
// console.log(myCar.getModel());  


// problem-5
function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    } else {
        return value * 2
    }
}

// console.log(processValue('amar nam holo ariful islam arfat'))


// problem-6
interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }
    let mostExpensive = products[0];
    for (const product of products) {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    }
    return mostExpensive;
}

const productList: Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 30 },
    { name: "Bag", price: 50 }
];

// console.log(getMostExpensiveProduct(productList));

// problem-7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
    if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}

// console.log(getDayType(Day.Monday));

// problem-8
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

// squareAsync(4).then(console.log); 





