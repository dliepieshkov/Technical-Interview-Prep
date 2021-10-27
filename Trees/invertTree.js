function invertTree(tree){
    if (tree===null)return tree
    let left = invertTree(tree.left)
    let right = invertTree(tree.right)
    tree.left = right
    tree.right = left
    return tree
}