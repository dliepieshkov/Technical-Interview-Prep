function inorderTraversalBinaryTree(root){
    if (root===null)return []
    let stack = []
    let output = []
    let current = root
    while (current!==null || stack.length!==0){
        while(current!==null){
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        output.push(current.val)
        current = current.right
    }
    return output
}