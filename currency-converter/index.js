// const person =[
//     {name: "kapil", age:20},
//     {name: "lokesh", age:30}
// ];

// const arr = person.filter(x => x.age > 20);
// const arr1 = person.filter(x => x.name.includes("kapil"));
// console.log(arr1);

//const arr = [1,2,3,4,5];
// let abcd = arr.map(x => x*2);
// console.log(abcd);
// const val = Object.entries(arr);
// console.log(val);

const products = [
    {
        name:"acer",
        count:10,
        price:10000
    },
    {
        name:"lava",
        count:30,
        price:3000
    },
    {
        name:"nokia",
        count:40,
        price:5000
    }
];

//const totalprice = products.map(items => items.count*items.price);
const each = products.forEach((item, index, arr) => {
    return ;
});
console.log(each);