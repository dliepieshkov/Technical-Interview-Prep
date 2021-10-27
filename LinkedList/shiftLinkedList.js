(()=>{
    let shiftLinkedList = (head, k) => {
    if (k === 0)return head
    let current = head, l = 1
    while (current.next != null) {
        current = current.next
        l++
    }
    let offset = Math.abs(k) % l
    if (offset === 0)return head
    current.next = head
    current = head

    let pos = (k > 0 ? l - offset: offset)
    for (let i = 1; i < pos; i++)current = current.next;
    head = current.next;
    current.next = null;
    return head
    }

    list = new LinkedList()
    list.add(0).add(1).add(2).add(3).add(4).add(5).reverse()
    let l = shiftLinkedList(list.head, 5)
    let ll = new LinkedList(l)
    ll.print()
})();