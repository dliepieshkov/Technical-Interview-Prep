var mergeTwoLists = function(l1, l2) {
    if (l1===null && l2===null)return null
    else if (l1===null)return l2
    else if (l2===null)return l1
    let head = new ListNode(0)
    let currentNode = head

    while(l1 !== null && l2 !== null){
        if(l1.data < l2.data){
            currentNode.next = l1
            l1 = l1.next
        } else {
            currentNode.next = l2
            l2 = l2.next
        }
        currentNode = currentNode.next
    }

    if(l1 !== null) {
        currentNode.next = l1
    } else if (l2 !== null) {
        currentNode.next = l2
    }

    return head.next
};
(()=>{
    let list = new LinkedList()
    list.add(9).add(6).add(5).add(1).add(0).add(-2)
let list2 = new LinkedList()
list2.add(9).add(8).add(6).add(-1)

let l = mergeTwoLists(list2.head,list.head)
let ll = new LinkedList(l)
//ll.print()

})()