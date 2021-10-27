function isBinaryTreeSymmetric(root){
    if (root===null)return null
    let isMirror = (l,r)=>{
        if (l===null && r===null)return true
        if (l===null || r===null)return false
        return l.val===r.val && isMirror(l,r)
    }
    return isMirror(root.left,root.right)
}