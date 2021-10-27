(()=>{
    let nAryTreePostorderTraversal = function(root) {
        let stack = new LinkedList()
        let output = new LinkedList()
        if (root===null){
            return output
        }
        stack.add(root)
        while(!stack.isEmpty()){
            let node = stack.pollLast()
            output.addFirst(node.val)
            for(let i=0; i<node.children.size(); i++){
                stack.add(node.children[i])
            }
        }
        return output
    };
//console.log('nAryTreePostorderTraversal', nAryTreePostorderTraversal(ll))
})();