class Stack {
    constructor() {
        this.items = [];
    }

    push(data) {
        this.items.push(data);
    }

    pop() {
        if(this.length < 0) {
            throw new Error('Stack Underflow')
        } else {
            return this.items.pop();
        }
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// creating object for stack class
let stack = new Stack();
  
// testing isEmpty and pop on an empty stack
  
// returns false
console.log(stack.isEmpty()); 
  
// returns Underflow
// console.log(stack.pop()); 

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek())

console.log(stack.size())

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())