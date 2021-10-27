(()=>{
    var mergeKLists = function(lists) {
        if (!lists || lists.length===0){
            return null
        }
        while(lists.length>1){
            let a = lists.pop()
            let b = lists[0]
            lists[0] = mergeTwoLists(a, b)
        }
        return lists[0]
    }
    var mergeTwoLists = function(a, b){
        let mergedList = new ListNode()
        let current = mergedList
        while(a!==null && b!==null){
            if (a.val<b.val){
                current.next = a
                a = a.next
            } else {
                current.next = b
                b = b.next
            }
            current = current.next
        }
        current.next = a || b
        return mergedList.next
    }
})();