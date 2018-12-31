// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let size = 0, current = this.head;
        while (current) {
            current = current.next;
            size++
        }
        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let last = this.head;
        while (last.next)
            last = last.next;
        return last;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head)
            this.head = this.head.next;
    }

    removeLast() {
        if (!this.head)
            return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next)
            current = current.next;
        current.next = null;
    }

    insertLast(data) {
        if (!this.head) this.head = new Node(data);
        else this.getLast().next = new Node(data);
    }

    getAt(index) {
        let current = this.head;
        for (let i = 0; i < index; i++)
            if (current) current = current.next;
            else break;
        return current;
    }

    removeAt(index) {
        if (index === 0) return this.removeFirst();
        let prev = this.getAt(index - 1);
        if (prev && prev.next)
            prev.next = prev.next.next;
    }

    insertAt(data, index) {
        if (index === 0) return this.insertFirst(data);
        let prev = this.getAt(index - 1) || this.getLast();
        if (prev) prev.next = new Node(data, prev.next);
    }

    forEach(f) {
        if (!this.head) return;
        this.head = f(this.head);
        let current = this.head;
        while (current.next) {
            current.next = f(current.next);
            current = current.next;
        }
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current;
            current = current.next;
        }
    }
}

module.exports = { Node, LinkedList };
