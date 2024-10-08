let a = 5; //global context(call on any sight of a web)

function add(num1, num2){
    const result = num1 + num2 + a;
    return result; //functional context (call on only beside the function)
}
add(3, 4);