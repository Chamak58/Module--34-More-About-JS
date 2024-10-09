// console.log(1);
// console.log(2);
// // 1 parameter
// // setTimeout(() => {
// //     console.log(3);
// // })

// // 2 parameter
// setTimeout(() => {
//     console.log(3);
// }, 3000);//1000 milliseconds = 1 second

// console.log(4);
// console.log(5);
// console.log(6);

let num = 0;
const clockId = setInterval(() => {
    num++;
    // num = num + 1;
    // num += 1;

    //clearInterval(clockId);
    //with condition:
    if(num >= 5){
        clearInterval(clockId);
    }
    console.log(clockId, num)
}, 2000)
