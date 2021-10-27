(()=>{
    let middleNodeLinkedList = function(head) {
        if (!head || !head.next){
            return head
        }
        let slow = head
        let fast = head
        while (fast!==null && fast.next!==null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    };
//console.log('middleNodeLinkedList', middleNodeLinkedList(ll))
})();