var postorderTraversal = function(root) {
    if (root===null)return []
    let stack = [root]
    let output = []
    while (stack.length!==0){
        current = stack.pop()
        output.push(current.val);
        if (current.left != null) {
            stack.push(current.left);
        }

        if (current.right != null) {
            stack.push(current.right);
        }
    }
    return output.reverse()
};