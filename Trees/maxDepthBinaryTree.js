function maxDepthBinaryTree(root){
    if (root===null)return null
    let lDepth = maxDepthBinaryTree(root.left)
    let rDepth = maxDepthBinaryTree(root.right)
    return Math.max(lDepth, rDepth) + 1
}