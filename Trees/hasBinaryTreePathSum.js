function hasBinaryTreePathSum(root, sum){
    if (root===null)return false
    let stack = []
    let sumStack = []
    stack.push(root)
    sumStack.push(sum-root.val)
    while(stack.length>0){
        let currentNode = stack.pop()
        let currentSum = sumStack.pop()
        if (currentNode.left===null && currentNode.right===null && currentSum===0)return true
        if (currentNode.left!==null){
            stack.push(currentNode.left)
            sumStack.push(currentSum-currentNode.left.val)
        }
        if (currentNode.right!==null){
            stack.push(currentNode.right)
            sumStack.push(currentSum-currentNode.right.val)
        }
    }
    return false
}