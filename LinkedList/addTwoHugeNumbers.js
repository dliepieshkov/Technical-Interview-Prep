function addTwoHugeNumbers(a, b) {
    if (a===null)return b
    else if (b===null)return a
    let reverse = (l) => {
        let curr = l,next=null,prev=null
        while (curr!==null) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }
    a = reverse(a)
    b = reverse(b)
    let s = 0, r = a
    while (a!==null || b!==null){
        s = a.value + (b?b.value:0) + (s > 9999 ? 1 : 0)
        a.data = s % 10000
        if (!a.next && (b && b.next || s > 9999)){
            a.next = new ListNode(0)
        }
        a = a.next
        if (b)b = b.next
    }
    return reverse(r)
}

(()=>{
    let list = new LinkedList()
    let list2 = new LinkedList()
    list.add(9999).add(9999).add(9999).print()
list2.add(1).print()
let l = addTwoHugeNumbers(list2.head, list.head)
let ll = new LinkedList(l)
ll.print('addTwoHugeNumbers:') // [9876, 5434, 0]
})();
(()=>{
    let list = new LinkedList()
    let list2 = new LinkedList()
    list.add(1999).add(5432).add(9876).print()
list2.add(8001).add(1).print()
let l = addTwoHugeNumbers(list.head, list2.head)
let ll = new LinkedList(l)
ll.print('addTwoHugeNumbers:') // [9876, 5434, 0]
})();