// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let widths = [1], queue = [root];
    while(queue.length) {
        const level = queue;
        queue = [];
        let width = 0;
        for (const node of level) {
            if (!node.children) continue;
            width += node.children.length;
            queue.push(...node.children);
        }
        if (width) widths.push(width);
    }
    return widths;

    // let widths = [0], queue = [root, 's'];
    // while (queue.length > 1) {
    //     const removed = queue.shift();
    //     if (removed === 's') {
    //         widths.push(0);
    //         queue.push('s');
    //     }
    //     else {
    //         widths[widths.length - 1]++;
    //         queue.push(...removed.children);
    //     }
    // }
    // return widths;
}

module.exports = levelWidth;
