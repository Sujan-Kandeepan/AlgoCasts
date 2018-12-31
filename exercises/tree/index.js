// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data = null, children = []) {
        this.data = data;
        this.children = children;
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        // this.children.splice(this.children.indexOf(data), 1);
        this.children = this.children.filter(node => node.data !== data);
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    traverseBF(f) {
        let queue = [this.root];
        while (queue.length) {
            const removed = queue.shift();
            queue.push(...removed.children);
            f(removed);
        }
    }

    traverseDF(f) {
        let stack = [this.root];
        while (stack.length) {
            const removed = stack.shift();
            stack.unshift(...removed.children);
            f(removed);
        }
    }
}

module.exports = { Tree, Node };
