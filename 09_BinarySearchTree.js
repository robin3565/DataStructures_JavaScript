class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let new_node = new Node(data);
        if(this.root === null) {
            this.root = new_node;
        } else {
            this.insertNode(this.root, new_node);
        }
    }

    insertNode(node, new_node) {
        if(new_node.data < node.data) {
            if(node.left === null) {
                node.left = new_node;
            } else {
                this.insertNode(node.left, new_node);
            }
        } else {
            if(node.right === null) {
                node.right = new_node;
            } else {
                this.insertNode(node.right, new_node);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if(node === null) return null;
        else if(key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if(key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if(node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            }

            let aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMinNode(node) {
        if(node.left === null) return node;
        else return this.findMinNode(node.left);
    }

    search(node, data) {
        if (!node) return null;
        // data가 node의 data보다 작을 경우 왼쪽으로 움직인다.
        else if (data < node.data) {
            return this.search(node.left, data);
        // data가 node의 data보다 클 경우 오른쪽으로 움직인다.
        } else if (data > node.data) {
            return this.search(node.right, data);
        // data가 node data와 같을 경우 node를 반환한다.
        } else return node;
    }
}

const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

console.log(BST);
BST.remove(5);
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17

BST.remove(7);
//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17

BST.remove(15);
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27