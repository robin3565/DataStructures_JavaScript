class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    indexOf(index) {
        return this.data[index];
    }

    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }

    remove(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }
    insertAt(item, index) {
        for (let i = this.length; i >= index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = item;
        this.length++;
        return this.data;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    indexOf(data) {
        let count = 0;
        let current_node = this.head;

        while (current_node != null) {
            if (current_node.data === data) return count;
            count++;
            current_node = current_node.next;
        }

        return -1;
    }

    // 항목을 리스트 가장 처음에 삽입한다.
    unshift(new_node) {

        if (this.size === 0) {
            this.head = new_node;
        } else {
            new_node.next = this.head;
            this.head = new_node;
        }
        this.size++;
        return this.size;
    }

    // 항목을 리스트 가장 마지막에 삽입한다.
    push(new_node) {
        let current_node;

        if (this.size === 0) {
            this.head = new_node;
        } else {
            current_node = this.head;
            while (current_node.next) {
                current_node = current_node.next
            }
            current_node.next = new_node;
        }
        this.size++;
    }

    insertAt(new_node, index) {
        if (index < 0 || index > this.size) {
            throw new Error("유효한 인덱스를 입력하세요.")
        }

        if (index == 0) {
            return this.unshift(new_node);
        }
        let current_node, previous_node;
        current_node = this.head;
        let count = 0;

        while (count < index) {
            count++;
            previous_node = current_node;
            current_node = current_node.next;
        }
        new_node.next = current_node;
        previous_node.next = new_node;
        this.size++;
        return new_node;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("유효한 인덱스를 입력하세요.")
        }

        let current_node, previous_node, count = 0;
        current_node = this.head;
        previous_node = current_node;

        if (index === 0) {
            this.head = current_node.next;
        } else {
            while (count < index) {
                count++;
                previous_node = current_node;
                current_node = current_node.next;
            }
            previous_node.next = current_node.next;
        }
        this.size--;
        return current_node.data;

    }

    isEmpty() {
        return this.size === 0;
    }

    length() {
        return this.size;
    }
}

const myArray = new Array();
const myLinkedList = new SinglyLinkedList();

// 과제1. insertion(삽입) Array & LinkedList 비교
// console.time('Array / Insertion');
for(let i = 0; i < 10000; i++) {
    myArray.insertAt(new Node(i), i)
}
// console.timeEnd('Array / Insertion');

// console.time('LinkedList / Insertion');
for(let i = 0; i < 10000; i++) {
    myLinkedList.insertAt(new Node(i), i)
}
// console.timeEnd('LinkedList / Insertion');


// 과제2. read(조회) Array & LinkedList 비교
// let arrSum = 0;
// console.time('Array / Read');
// for(let i = 0; i < 1000; i++) {
//     const random = Math.round(Math.random() * 10000);
//     arrSum += myArray.indexOf(random);
// }
// console.timeEnd('Array / Read');

// let llSum = 0;
// console.time('LinkedList / Read');
// for(let i = 0; i < 1000; i++) {
//     const random = Math.round(Math.random() * 10000);
//     llSum += myLinkedList.indexOf(random);
// }
// console.timeEnd('LinkedList / Read');

// 과제3. deletion(삭제) Array & LinkedList 비교
// let count = 10000;
// console.time('Array / Deletion');
// for(let i = 0; i < 1000; i++) {
//     const random = Math.round(Math.random() * count);
//     myArray.remove(random);
//     count--;
// }
// console.timeEnd('Array / Deletion');

// console.time('LinkedList / Deletion');
// for(let i = 0; i < 1000; i++) {
//     const random = Math.round(Math.random() * count);
//     myLinkedList.remove(random);
//     count--;
// }
// console.timeEnd('LinkedList / Deletion');

console.time('Array / Deletion');
for(let i = 0; i < 1000; i++) {
    myArray.remove(i);
}
console.timeEnd('Array / Deletion');

console.time('LinkedList / Deletion');
for(let i = 0; i < 1000; i++) {
    myLinkedList.remove(i);
}
console.timeEnd('LinkedList / Deletion');

// console.log(myArray);
// console.log(myLinkedList)