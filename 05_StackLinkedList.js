class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(data) {
        let new_node = new Node(data);
        new_node.next = this.top;
        this.top = new_node;
        this.length++;
    }

    pop() {
        if(this.length < 0) {
            throw new Error('Stack Underflow')
        } else {
            let temp = this.top;
            this.top = this.top.next;
            temp = null;
            this.length--;
            return this.top;
        }
    }

    peek() {
        return this.top;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }
}


// creating object for stack class
let stack = new StackLinkedList();
  
// testing isEmpty and pop on an empty stack
  
// returns false
console.log(stack.isEmpty()); 
  
// returns Underflow
// console.log(stack.pop()); 

stack.push(10);
stack.push(20);
stack.push(30);
console.log("stack", stack)
// console.log(stack.peek())

// console.log(stack.size())

// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())