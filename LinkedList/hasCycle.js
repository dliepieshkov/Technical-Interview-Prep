(()=>{
    let hasCycle = function(head) {
        if (!head || !head.next){
            return head
        }
        let slow = head
        let fast = head.next
        while (slow!==fast){
            if (fast===null || fast.next===null){
                return false
            }
            slow = slow.next
            fast = fast.next.next
        }
        return true
    };
//console.log('hasCycle', hasCycle(ll))
})();