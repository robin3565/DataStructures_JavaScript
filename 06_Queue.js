class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(data) {
        this.items.push(data);
        return this.items;
    }

    dequeue() {
        if(this.isEmpty()) {
            throw new Error("Empty Queue Exception");
        } else {
            this.items.shift();
            return this.items;
        }
    }

    getFront() {
        if(this.isEmpty()) {
            throw new Error("Empty Queue")
        } else {
            return this.items[0];
        }
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();
console.log(queue.isEmpty())
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.enqueue(4))
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())