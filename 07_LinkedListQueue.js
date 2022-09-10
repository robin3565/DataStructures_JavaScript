class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    enqueue(data) {
        let new_node = new Node(data);

        if(this.isEmpty()) {
            this.head = this.tail = new_node;
        } else {
            this.tail.next = new_node;
            this.tail = this.tail.next;
        }
        this.size++;
        return true;
    }

    dequeue() {
        if(this.isEmpty()) {
            throw new Error("Empty Queue Exception");
        } else {
            this.head = this.head.next;
            this.size--;
        }
        return true;
    }

    getFront() {
        if(this.isEmpty()) {
            throw new Error("Empty Queue Exception");
        } else {
            return this.head.data;
        }
    }

    getRear() {
        if(this.isEmpty()) {
            throw new Error("Empty Queue Exception");
        } else {
            return this.tail.data;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    size() {
        return this.items.length;
    }
}

const llq = new LinkedListQueue();
console.log(llq.isEmpty())

console.log(llq.enqueue(1))
console.log(llq.enqueue(2))
console.log(llq.enqueue(3))
console.log(llq.dequeue())
console.log(llq.getFront())
console.log(llq.getRear())
console.log(llq)