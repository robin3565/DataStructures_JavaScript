class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // 전위 탐색(루트->왼쪽->오른쪽)
    printPreorder(node) {
        if (node === null) return;
        /* first print data of node */
        document.write(node.data + " ");

        /* then recur on left subtree */
        this.printPreorder(node.left);

        /* now recur on right subtree */
        this.printPreorder(node.right);
    }

    // 중위 탐색(왼쪽->루트->오른쪽)
    printInorder(node) {
        if (node === null) return;
        this.printInorder(node.left);
        document.write(node.data + " ");
        this.printInorder(node.right);
    }

    // 후위 탐색(왼쪽->오른쪽->루트)
    printPostorder(node) {
        if (node === null) return;
        this.printPostorder(node.left);
        this.printPostorder(node.right);
        document.write(node.data + " ");
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const binarytree = new BinaryTree();
document.write("이진 트리의 전위 탐색(Preorder traversal): ");
binarytree.printPreorder(root);

document.write("<br/>이진 트리의 중위 탐색(Inorder traversal): ");
binarytree.printInorder(root);

document.write("<br/>이진 트리의 후위 탐색(Postorder traversal): ");
binarytree.printPostorder(root);