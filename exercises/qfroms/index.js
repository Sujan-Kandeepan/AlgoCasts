// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.data = new Stack();
        this.temp = new Stack();
    }

    add(record) {
        while (this.data.peek())
            this.temp.push(this.data.pop());
        this.data.push(record);
        while (this.temp.peek())
            this.data.push(this.temp.pop());

        // this.data.push(record);
    }

    remove() {
        return this.data.pop();

        // while (this.data.peek())
        //     this.temp.push(this.data.pop());
        // const record = this.temp.pop();
        // while (this.temp.peek())
        //     this.data.push(this.temp.pop())
        // return record;
    }

    peek() {
        return this.data.peek();

        // while (this.data.peek())
        //     this.temp.push(this.data.pop());
        // const record = this.temp.peek();
        // while (this.temp.peek())
        //     this.data.push(this.temp.pop())
        // return record;
    }
}

module.exports = Queue;
