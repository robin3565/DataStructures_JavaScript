// 팩토리얼 함수

// Recursion
const FactRecursion = (n) => {
    if(n===1) return 1;
    else if(n===0) return 0;
    else return FactRecursion(n-1)*n
}

let i = 1;
while(true) {
    console.time('fact_recursion');
    console.log(i, FactRecursion(i));
    console.timeEnd('fact_recursion');
    i++;
}

// Iteration
const FactIteration = (n) => {
    let temp = 1;
    for(let i=1; i<=n; i++) {
        temp = temp * i;
    }
    return temp;
}

while(true) {
    console.time('fact_iteration');
    console.log(i, FactIteration(i));
    console.timeEnd('fact_iteration');
    i++;
}


console.log("FactIteration", FactIteration(4))