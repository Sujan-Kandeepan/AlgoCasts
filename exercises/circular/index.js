// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    // let current = list.head, found = {};
    // while (current) {
    //     if (found[current.data] === current)
    //         return true;
    //     found[current.data] = current;
    //     current = current.next;
    // }
    // return false;

    let slow = list.head, fast = list.head.next;
    while (fast && fast.next) {
        if (slow === fast) return true;
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
}

module.exports = circular;
