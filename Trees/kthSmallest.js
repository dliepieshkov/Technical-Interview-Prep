var kthSmallest = function(root, k) {
    let result
    let inorder = (root)=>{
        if (root===null || k===0)return
        inorder(root.left)
        if (--k===0)result = root.val
        inorder(root.right)
    }
    inorder(root)
    return result
};

var kthSmallestVer2 = function(root, k) {
    let inorder = (root)=>{
        if (root===null || k===0)return 0
        return inorder(root.left) + (--k===0?root.val:0) + inorder(root.right)
    }

    return inorder(root)
};