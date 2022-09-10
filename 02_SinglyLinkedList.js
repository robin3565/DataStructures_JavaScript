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

        while(current_node != null) {
            if(current_node.data === data) return count;
            count ++;
            current_node = current_node.next;
        }

        return -1;
    }

    // 항목을 리스트 가장 처음에 삽입한다.
    unshift(data) {
        let new_node = new Node(data);

        if(this.size === 0) {
            this.head = new_node;
        } else {
            new_node.next = this.head;
            this.head = new_node;
        }
        this.size++;
        return new_node;
    }

    // 항목을 리스트 가장 마지막에 삽입한다.
    push(data) {
        let new_node = new Node(data);
        let current_node;

        if(this.size === 0) {
            this.head = new_node;
        } else {
            current_node = this.head;
            while(current_node.next) {
                current_node = current_node.next
            }
            current_node.next = new_node;
        }
        this.size++;
        return new_node;
    }

    insertAt(data, index) {
        if(index < 0 || index >= this.size) {
            throw new Error("유효한 인덱스를 입력하세요.") 
        } 

        if(index == 0) {
            return this.unshift(data);
        }

        let new_node = new Node(data);
        let current_node, previous_node;
        current_node = this.head;
        let count = 0;

        while(count < index) {
            count ++;
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

        if(index === 0) {
            this.head = current_node.next;
        } else {
            while(count < index) {
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

var sl = new SinglyLinkedList();
 
// testing isEmpty on an empty list
// returns true
console.log("is List Empty ? ", sl.isEmpty());
 
// adding element to the list
sl.push(10);
 
// prints 10
console.log(sl)
 
// returns 1
console.log("length: ", sl.length());
 
// // adding more elements to the list
sl.push(20);
sl.push(30);
sl.push(40);
sl.push(50);
 
// returns 10 20 30 40 50
console.log(sl)
 
// prints 50 from the list
console.log("is element removed ?" + sl.remove(4));
 
// returns 3
console.log("Index of 40 " + sl.indexOf(40));
 
// insert 60 at second position
// sl contains 10 20 60 30 40
sl.insertAt(60, 2);
 
console.log(sl)
 
// returns false
console.log("is List Empty ? " + sl.isEmpty());
 
// remove 3rd element from the list -> 30
console.log(sl.remove(3));
 
// prints 10 20 60 40
console.log(sl)