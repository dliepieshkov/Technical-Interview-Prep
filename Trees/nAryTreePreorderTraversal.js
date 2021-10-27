(()=>{
    let nAryTreePreorderTraversal = function(root) {
        let stack = []
        let output = []
        if (root===null){
            return output
        }
        stack.add(root)
        while(!stack.isEmpty()){
            let node = stack.shift()
            output.push(node.val)
            for(let child in node.children){
                stack.add(child)
            }
        }
        return output.reverse()
    };
//console.log('nAryTreePostorderTraversal', nAryTreePostorderTraversal(ll))
})();