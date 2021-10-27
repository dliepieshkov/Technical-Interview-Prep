function mergeTwoTrees(t1,t2){
    if (t1===null)return t2
    if (t2===null)return t1
    t1.val+=t2.val
    mergeTwoTrees(t1.left,t2.left)
    mergeTwoTrees(t1.right,t2.right)
    return t1
}