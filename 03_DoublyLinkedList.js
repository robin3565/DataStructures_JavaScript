class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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

    // 항목을 리스트 가장 마지막에 삽입한다.
    push(data) {
        let new_node = new Node(data);

        if (this.size === 0) {
            this.head = this.tail = new_node;
        } else {
            this.tail.next = new_node;
            new_node.prev = this.tail;
            this.tail = new_node;
        }
        this.size++;
    }

    // 항목을 리스트 가장 처음에 삽입한다.
    unshift(data) {
        let new_node = new Node(data);

        if (this.size === 0) {
            this.head = this.tail = new_node;
        } else {
            this.head.prev = new_node;
            new_node.next = this.head;
            this.head = new_node;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index >= this.size) {
            throw new Error("유효한 인덱스를 입력하세요.") 
        }

        if (index == 0) {
            return this.unshift(data);
        }

        let new_node = new Node(data);
        let current_node = this.head;
        let count = 0;

        while (count < index) {
            count++;
            current_node = current_node.next;
        }
        let previous_node = current_node.prev;
        new_node.next = current_node;
        new_node.prev = previous_node;
        previous_node.next = new_node;
        current_node.prev = new_node;
        this.size++;
        return new_node;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("유효한 인덱스를 입력하세요.") 
        }

        if (index == 0) {
            // head(첫 번째 노드) 삭제
            this.head.next.prev = null;
            this.head = this.head.next;
            this.size--;
            return;
        } else if (index === this.size - 1) {
            // tail(마지막 노드) 삭제
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.size--;
            return;
        }
        
        let current_node = this.head;
        let count = 0;

        while (count < index) {
            count++;
            current_node = current_node.next;
        }
        current_node.prev.next = current_node.next;
        current_node.next.prev = current_node.prev;
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


const dl = new DoublyLinkedList();
 
// testing isEmpty on an empty list
// returns true
console.log("is List Empty ? ", dl.isEmpty());
 
// adding element to the list
dl.push(10);
 
// prints 10
console.log(dl)
 
// returns 1
console.log("length: ", dl.length());
 
// // adding more elements to the list
dl.push(20);
dl.push(30);
dl.push(40);
dl.push(50);
 
// returns 10 20 30 40 50
console.log(dl)
 
// prints 50 from the list
console.log("is element removed ? " + dl.remove(4));

// returns 3
console.log("Index of 40 " + dl.indexOf(40));
 
// insert 60 at second position
// sl contains 10 20 60 30 40
dl.insertAt(60, 2);
 
console.log(dl)
 
// returns false
console.log("is List Empty ? " + dl.isEmpty());
 
// remove 3rd element from the list -> 30
console.log(dl.remove(3));
 
// prints 10 20 60 40
console.log(dl)