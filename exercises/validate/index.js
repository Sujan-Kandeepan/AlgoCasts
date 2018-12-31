// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    if ((min && node.data < min) || (max && node.data > max)) return false;
    return (node.left ? validate(node.left, min, node.data) : true)
        && (node.right ? validate(node.right, node.data, max) : true);
}

module.exports = validate;
